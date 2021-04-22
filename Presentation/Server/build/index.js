"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var router_1 = __importDefault(require("./router/router"));
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
    socket.on('login', function (data) {
        console.log(data);
    });
});
server.listen(12000, '192.168.0.101');
//# sourceMappingURL=index.js.map