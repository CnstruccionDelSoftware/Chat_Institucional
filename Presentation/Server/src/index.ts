import Server from './server/server';
import login from './router/login';
import student from './router/student';
import course from './router/course';
import Socket from './server/socket';


import ServiceChatImpl from './service/ServiceChatImpl';
import ServiceChat from './service/ServiceChat';

import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');
import DaoImplMessage from './repository/daoImpl/DaoImplMessage';

//probando

//console.log('hola mundo');
const expressServer = Server.init(5000,'http://localhost');
const server = http.createServer(expressServer.getApp());
const io = new Socket(server);

expressServer.getApp().use(express.static(path.join(__dirname,'controllers')));
expressServer.getApp().use(express.json());
expressServer.getApp().use(express.urlencoded({extended:true}))
expressServer.getApp().use(require('cors')());
expressServer.getApp().use(login);
expressServer.getApp().use(student);
expressServer.getApp().use(course);


require('dotenv').config()

expressServer.getApp().use("/login",login)
expressServer.getApp().use("/student",student)
expressServer.getApp().use("/course",course)

// expressServer.getApp().post("/test", loginUser)


io.getSocket().on('connection',(socket: socketIO.Socket) =>{

    console.log('New connection: ' , socket.id);
    socket.emit('connection',null);
    const serviceChat = new ServiceChatImpl();
    const dao = new DaoImplMessage();

    socket.on('sendMessage:chat',(message:any) => {
        //const m = Object.assign(new MessageModel());
        
        //serviceChat.sendMessage(m.getIdest(),m.getIdcr(),m.getContent());
        //console.log(dao.findAll());
    })

});


server.listen(5000);

//server.start();
