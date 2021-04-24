"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var router_1 = __importDefault(require("./router/router"));
var ServiceChatImpl_1 = __importDefault(require("./service/ServiceChatImpl"));
var http = require("http");
var socketIO = require("socket.io");
var express = require("express");
var path = require("path");
var expressServer = server_1.default.init(12000, '192.168.0.101');
var server = http.createServer(expressServer.getApp());
var io = new socketIO.Server(server);
expressServer.getApp().use(router_1.default);
expressServer.getApp().use(express.static(path.join(__dirname, 'controllers')));
io.on('connection', function (socket) {
    console.log('new connection', socket.id);
    var serviceChat = new ServiceChatImpl_1.default();
    socket.on('login:chat', function (id, password) {
        var res = serviceChat.login(id, password);
        console.log(res);
    });
    socket.on('courseList:chat', function (id) {
        var res = serviceChat.listStudentCourses(id);
        console.log(res);
    });
});
server.listen(12000, '192.168.0.101');
//# sourceMappingURL=index.js.map