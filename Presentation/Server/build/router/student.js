"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var errorHandler_1 = __importDefault(require("../helper/errorHandler"));
var studentController_1 = require("../controllers/studentController");
var auth_1 = __importDefault(require("../helper/auth"));
var loginController_1 = require("../controllers/loginController");
var router = express_1.Router();
router.get("/courses", auth_1.default, errorHandler_1.default(studentController_1.getStudentCourses));
router.post("/login", errorHandler_1.default(loginController_1.loginStudent));
router.post("/register", errorHandler_1.default(loginController_1.registerStudent));
exports.default = router;
//# sourceMappingURL=student.js.map