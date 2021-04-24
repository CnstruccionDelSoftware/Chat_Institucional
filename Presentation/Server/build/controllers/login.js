"use strict";
var socket = window.io("192.168.0.101:12000");
var username = document.getElementById('usr');
var password = document.getElementById('psw');
var btn = document.getElementById('btn');
var Login = (function () {
    function Login(cb) {
        this.cb = cb;
    }
    Login.prototype.emmitMessage = function (id, password) {
        Login.io.emit('login:chat', id, password);
    };
    Login.prototype.getCourses = function (id) {
        Login.io.emit('courseList:chat', id);
    };
    return Login;
}());
Login.io = socket;
function messageReceived(respose) {
}
var login = new Login(messageReceived);
login.emmitMessage(1, '123');
login.getCourses(1);
//# sourceMappingURL=login.js.map