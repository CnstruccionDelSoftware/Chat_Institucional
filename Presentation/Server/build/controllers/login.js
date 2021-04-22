"use strict";
var socket = window.io("192.168.0.101:12000");
var username = document.getElementById('usr');
var password = document.getElementById('psw');
var btn = document.getElementById('btn');
var Login = (function () {
    function Login(cb) {
        this.cb = cb;
    }
    Login.prototype.emmitMessage = function (message) {
        Login.io.emit('login', message);
    };
    return Login;
}());
Login.io = socket;
function messageReceived(respose) {
}
var login = new Login(messageReceived);
login.emmitMessage('hola mundoo');
//# sourceMappingURL=login.js.map