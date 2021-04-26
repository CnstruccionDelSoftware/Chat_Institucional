"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var login_1 = __importDefault(require("./router/login"));
var student_1 = __importDefault(require("./router/student"));
var course_1 = __importDefault(require("./router/course"));
var socket_1 = __importDefault(require("./server/socket"));
var ServiceChatImpl_1 = __importDefault(require("./service/ServiceChatImpl"));
var http = require("http");
var express = require("express");
var path = require("path");
var DaoImplMessage_1 = __importDefault(require("./repository/daoImpl/DaoImplMessage"));
var expressServer = server_1.default.init(5000, 'http://localhost');
var server = http.createServer(expressServer.getApp());
var io = new socket_1.default(server);
expressServer.getApp().use(express.static(path.join(__dirname, 'controllers')));
expressServer.getApp().use(express.json());
expressServer.getApp().use(express.urlencoded({ extended: true }));
expressServer.getApp().use(require('cors')());
expressServer.getApp().use(login_1.default);
expressServer.getApp().use(student_1.default);
expressServer.getApp().use(course_1.default);
require('dotenv').config();
expressServer.getApp().use("/login", login_1.default);
expressServer.getApp().use("/student", student_1.default);
expressServer.getApp().use("/course", course_1.default);
io.getSocket().on('connection', function (socket) {
    console.log('New connection: ', socket.id);
    socket.emit('connection', null);
    var serviceChat = new ServiceChatImpl_1.default();
    var dao = new DaoImplMessage_1.default();
    socket.on('sendMessage:chat', function (message) {
    });
});
server.listen(5000);
//# sourceMappingURL=index.js.map