import Server from './server/server';
import router from './router/router';
import ServiceChatImpl from './service/ServiceChatImpl';
import ServiceChat from './service/ServiceChat';
import dtoCreateMessageJson from './helper/dtoCreateMessageJson';

import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');
import MessageModel from './domain/Model/MessageModel';
import dtoCreateMessage from './helper/dtoCreateMessage';
import DaoImplMessage from './repository/daoImpl/DaoImplMessage';
import {Request, Response} from "express";
import bodyParser from "body-parser";

//probando
import {loginUser} from "./controllers/loginController";


//console.log('hola mundo');
const expressServer = Server.init(5000,'http://localhost');
const server = http.createServer(expressServer.getApp());
const io = new socketIO.Server(server);

expressServer.getApp().use(router);
expressServer.getApp().use(express.static(path.join(__dirname,'controllers')));
expressServer.getApp().use(express.json());
expressServer.getApp().use(express.urlencoded({extended:true}))
expressServer.getApp().use(require('cors')());

expressServer.getApp().post("/test",loginUser)


io.on('connection',(socket: socketIO.Socket) =>{

    console.log('new connection' , socket.id);
    const serviceChat = new ServiceChatImpl();
    const dao = new DaoImplMessage();

    socket.on('login:chat',(id:number,password:string) => {
        const res = serviceChat.login(id,password)
        console.log(res);
    });

    socket.on('courseList:chat',(id:number) => {
        const res = serviceChat.listStudentCourses(id);
        console.log(res);
    });

    // socket.on('sendMessage:chat',(message:any) => {
    //     const m = Object.assign(new MessageModel(),);
        
    //     //serviceChat.sendMessage(m.getIdest(),m.getIdcr(),m.getContent());
    //     //console.log(dao.findAll());
    // })

});

server.listen(5000);

//server.start();
