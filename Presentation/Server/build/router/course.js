"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var errorHandler_1 = __importDefault(require("../helper/errorHandler"));
var courseController_1 = require("../controllers/courseController");
var auth_1 = __importDefault(require("../helper/auth"));
var router = express_1.Router();
router.get("/messages", auth_1.default, errorHandler_1.default(courseController_1.getMessagesOfCourse));
router.post("/create", auth_1.default, errorHandler_1.default(courseController_1.createCourse));
router.post("/addStudent", auth_1.default, errorHandler_1.default(courseController_1.addStudentToCourse));
exports.default = router;
//# sourceMappingURL=course.js.map