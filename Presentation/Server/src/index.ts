import Server from './server/server';
import student from './router/student';
import course from './router/course';
import Socket from './server/socket';


import ServiceChatImpl from './service/ServiceChatImpl';
import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');
import { Message } from './domain/Model/Message';
import jwt from 'jwt-then';
import {Request, Response, NextFunction} from 'express';


const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:GrupoConstruccionIntec@cluster0.wfvz1.mongodb.net/ChatApp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', (err:any) => {
    console.log("Mongoose Connection ERROR " + err.message);
});

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected!");
})


//console.log('hola mundo');
const expressServer = Server.init(5000,'http://localhost');
const server = http.createServer(expressServer.getApp());
const io = new Socket(server);

expressServer.getApp().use(express.static(path.join(__dirname,'controllers')));
expressServer.getApp().use(express.json());
expressServer.getApp().use(express.urlencoded({extended:true}))
expressServer.getApp().use(require('cors')());
expressServer.getApp().use(student);
expressServer.getApp().use(course);


require('dotenv').config()

expressServer.getApp().use("/student",student)
expressServer.getApp().use("/course",course)

// expressServer.getApp().post("/test", loginUser)
const serviceChat = new ServiceChatImpl();

io.getSocket().on('connection',(socket: socketIO.Socket) =>{
    console.log('New connection: ' , socket.id);
    socket.on('disconnect', ()=>{
        console.log("Disconnected: " + socket.id);
    });
    //socket.on('connection',null);
    socket.on('joinRoom',(courseId: string)=> {
        socket.join(courseId);
        console.log("A user joined course: " + courseId);
    });

    socket.on('leaveRoom', (courseId:string)=>{
        socket.leave(courseId);
        console.log("A user left course: " + courseId);
    });

    socket.on('sendMessage', async (message:any) => {
        try {
            var msgJson = JSON.parse(message);
            //console.log(msg)
            const student = await serviceChat.findStudentById(msgJson.student_id);
            if(!student) throw "student doesnt exist"
            const course = await serviceChat.findCourseById(msgJson.channel_id);
            if(!course) throw "course doesnt exist"

            //console.log("Message incoming to course: " + courseId + ": "+ message)

            console.log("Incoming message: " + message)

            const msg = new Message({id_student: msgJson.student_id, id_course: msgJson.channel_id, content: msgJson.message});

            const model = await serviceChat.sendMessage(msg, student?.username);
            model.username = student.username;

            io.getSocket().to(msgJson.channel_id).emit("newMessage", {model});

        
        } catch (error) {
            throw error;
        }
        
    })

    socket.to("60868ca341d6255b0c14c66a").emit("newMessage",new Message({
        id_student:"60867fa521d65230d8f06997",
        id_course: "60868ca341d6255b0c14c66a",
        content: "testing"
    }))

});


server.listen(5000);

//server.start();
