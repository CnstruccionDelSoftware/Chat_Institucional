"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var errorHandler_1 = __importDefault(require("../helper/errorHandler"));
var loginController_1 = require("../controllers/loginController");
var router = express_1.Router();
router.post("/", errorHandler_1.default(loginController_1.loginUser));
exports.default = router;
//# sourceMappingURL=login.js.map