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
exports.addStudentToCourse = exports.createCourse = exports.getMessagesOfCourse = void 0;
var ServiceChatImpl_1 = __importDefault(require("../service/ServiceChatImpl"));
var Course_1 = require("../domain/Model/Course");
var CourseStudent_1 = require("../domain/Model/CourseStudent");
var mongoose_1 = __importDefault(require("mongoose"));
var jwt = require('jwt-then');
var serviceChat = new ServiceChatImpl_1.default();
var getMessagesOfCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, messages, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.param('id');
                return [4, serviceChat.findMessagesByCourseId(id)];
            case 1:
                messages = _a.sent();
                res.json({
                    messages: messages,
                });
                return [3, 3];
            case 2:
                err_1 = _a.sent();
                res.status(401).json({
                    message: err_1,
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getMessagesOfCourse = getMessagesOfCourse;
var createCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var subject, courseExists, created, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                subject = req.body.subject;
                return [4, serviceChat.findCourseBySubject(subject)];
            case 1:
                courseExists = _a.sent();
                if (courseExists)
                    throw "Course already exists";
                return [4, serviceChat.createCourse(new Course_1.Course({ subject: subject }))];
            case 2:
                created = _a.sent();
                if (!created) {
                    throw "Course wasn't created";
                }
                else {
                    res.json({
                        message: "Course added sucessfully"
                    });
                }
                return [3, 4];
            case 3:
                err_2 = _a.sent();
                res.status(401).json({
                    message: err_2,
                });
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.createCourse = createCourse;
var addStudentToCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, subject, studentExists, courseExists, studentCourses, created, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, username = _a.username, subject = _a.subject;
                return [4, serviceChat.findStudentByUsername(username)];
            case 1:
                studentExists = _b.sent();
                if (!studentExists)
                    throw "Student doesn't exist.";
                return [4, serviceChat.findCourseBySubject(subject)];
            case 2:
                courseExists = _b.sent();
                if (!courseExists)
                    throw "Course doesn't exist.";
                return [4, serviceChat.listStudentCourses(studentExists._id)];
            case 3:
                studentCourses = _b.sent();
                if (studentCourses === null || studentCourses === void 0 ? void 0 : studentCourses.includes(courseExists))
                    throw "Student already in course.";
                return [4, CourseStudent_1.CourseStudent.create({
                        id_student: mongoose_1.default.Types.ObjectId(studentExists._id),
                        id_course: mongoose_1.default.Types.ObjectId(courseExists._id)
                    })];
            case 4:
                created = _b.sent();
                if (!created) {
                    throw "Course wasn't created";
                }
                else {
                    res.json({
                        message: "Course was added successfully;",
                    });
                }
                return [3, 6];
            case 5:
                err_3 = _b.sent();
                res.status(401).json({
                    message: err_3,
                });
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
exports.addStudentToCourse = addStudentToCourse;
//# sourceMappingURL=courseController.js.map