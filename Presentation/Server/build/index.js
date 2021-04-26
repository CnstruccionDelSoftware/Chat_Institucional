"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var student_1 = __importDefault(require("./router/student"));
var course_1 = __importDefault(require("./router/course"));
var socket_1 = __importDefault(require("./server/socket"));
var ServiceChatImpl_1 = __importDefault(require("./service/ServiceChatImpl"));
var http = require("http");
var express = require("express");
var path = require("path");
var Message_1 = require("./domain/Model/Message");
var mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:GrupoConstruccionIntec@cluster0.wfvz1.mongodb.net/ChatApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', function (err) {
    console.log("Mongoose Connection ERROR " + err.message);
});
mongoose.connection.once('open', function () {
    console.log("MongoDB Connected!");
});
var expressServer = server_1.default.init(5000, 'http://localhost');
var server = http.createServer(expressServer.getApp());
var io = new socket_1.default(server);
expressServer.getApp().use(express.static(path.join(__dirname, 'controllers')));
expressServer.getApp().use(express.json());
expressServer.getApp().use(express.urlencoded({ extended: true }));
expressServer.getApp().use(require('cors')());
expressServer.getApp().use(student_1.default);
expressServer.getApp().use(course_1.default);
require('dotenv').config();
expressServer.getApp().use("/student", student_1.default);
expressServer.getApp().use("/course", course_1.default);
var serviceChat = new ServiceChatImpl_1.default();
io.getSocket().on('connection', function (socket) {
    console.log('New connection: ', socket.id);
    socket.on('disconnect', function () {
        console.log("Disconnected: " + socket.id);
    });
    socket.on('joinRoom', function (courseId) {
        socket.join(courseId);
        console.log("A user joined course: " + courseId);
    });
    socket.on('leaveRoom', function (courseId) {
        socket.leave(courseId);
        console.log("A user left course: " + courseId);
    });
    socket.on('sendMessage', function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var msgJson, student_2, course_2, msg, model, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    msgJson = JSON.parse(message);
                    return [4, serviceChat.findStudentById(msgJson.student_id)];
                case 1:
                    student_2 = _a.sent();
                    if (!student_2)
                        throw "student doesnt exist";
                    return [4, serviceChat.findCourseById(msgJson.channel_id)];
                case 2:
                    course_2 = _a.sent();
                    if (!course_2)
                        throw "course doesnt exist";
                    console.log("Incoming message: " + message);
                    msg = new Message_1.Message({ id_student: msgJson.student_id, id_course: msgJson.channel_id, content: msgJson.message });
                    return [4, serviceChat.sendMessage(msg, student_2 === null || student_2 === void 0 ? void 0 : student_2.username)];
                case 3:
                    model = _a.sent();
                    model.username = student_2.username;
                    io.getSocket().to(msgJson.channel_id).emit("newMessage", { model: model });
                    return [3, 5];
                case 4:
                    error_1 = _a.sent();
                    throw error_1;
                case 5: return [2];
            }
        });
    }); });
    socket.to("60868ca341d6255b0c14c66a").emit("newMessage", new Message_1.Message({
        id_student: "60867fa521d65230d8f06997",
        id_course: "60868ca341d6255b0c14c66a",
        content: "testing"
    }));
});
server.listen(5000);
//# sourceMappingURL=index.js.map