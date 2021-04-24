import Server from './server/server';
import router from './router/router';
import ServiceChatImpl from './service/ServiceChatImpl';
import ServiceChat from './service/ServiceChat';

import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');


//console.log('hola mundo');
const expressServer = Server.init(12000,'192.168.0.101');
const server = http.createServer(expressServer.getApp());
const io = new socketIO.Server(server);

expressServer.getApp().use(router);
expressServer.getApp().use(express.static(path.join(__dirname,'controllers')));

io.on('connection',(socket: socketIO.Socket) =>{
    console.log('new connection' , socket.id);

    const serviceChat = new ServiceChatImpl();

    socket.on('login:chat',(id:number,password:string) => {
        const res = serviceChat.login(id,password)
        console.log(res);
    });

    socket.on('courseList:chat',(id:number) => {
        const res = serviceChat.listStudentCourses(id);
        console.log(res);
    });

});


server.listen(12000,'192.168.0.101');

//server.start();
