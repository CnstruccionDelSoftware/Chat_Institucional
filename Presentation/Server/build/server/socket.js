"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = require("socket.io");
var Socket = (function () {
    function Socket(server) {
        this.server = server;
        this.socket = new socketIO.Server(server);
    }
    Socket.prototype.getSocket = function () {
        return this.socket;
    };
    return Socket;
}());
exports.default = Socket;
//# sourceMappingURL=socket.js.map