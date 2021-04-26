"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var errorHandler_1 = __importDefault(require("../helper/errorHandler"));
var studentController_1 = require("../controllers/studentController");
var auth_1 = __importDefault(require("../helper/auth"));
var router = express_1.Router();
router.get("/getCourses", auth_1.default, errorHandler_1.default(studentController_1.getStudentCourses));
exports.default = router;
//# sourceMappingURL=student.js.map