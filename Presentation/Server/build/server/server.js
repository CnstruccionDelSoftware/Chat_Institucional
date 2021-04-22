"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = (function () {
    function Server(port, ip) {
        this.app = express();
        this.port = port;
        this.ip = ip;
    }
    Server.prototype.getApp = function () {
        return this.app;
    };
    Server.prototype.start = function () {
        this.app.listen(this.port, this.ip);
    };
    Server.init = function (port, ip) {
        return new Server(port, ip);
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map