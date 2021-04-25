"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
var ServiceChatImpl_1 = __importDefault(require("../service/ServiceChatImpl"));
var jwt = require('jwt-then');
var serviceChat = new ServiceChatImpl_1.default();
var loginUser = function (req, res) {
    try {
        console.log(req.body);
        res.json({
            message: "User logged in succesfully!",
        });
    }
    catch (_a) {
        res.status(401).json({
            message: "User error!"
        });
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=loginController.js.map