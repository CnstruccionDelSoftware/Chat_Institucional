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
var DaoImplStudent_1 = __importDefault(require("../repository/daoImpl/DaoImplStudent"));
var DaoImplCourse_1 = __importDefault(require("../repository/daoImpl/DaoImplCourse"));
var DaoImplCourse_Student_1 = __importDefault(require("../repository/daoImpl/DaoImplCourse_Student"));
var DaoImplMessage_1 = __importDefault(require("../repository/daoImpl/DaoImplMessage"));
var ServiceChatImpl = (function () {
    function ServiceChatImpl() {
        this.daoStudent = new DaoImplStudent_1.default();
        this.daoCourse = new DaoImplCourse_1.default();
        this.daoCourse_Student = new DaoImplCourse_Student_1.default();
        this.daoMessage = new DaoImplMessage_1.default();
    }
    ServiceChatImpl.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoStudent.findByUsernameAndPassword(username, password)];
                    case 1:
                        student = _a.sent();
                        if (!student)
                            throw "Username and password did not match.";
                        return [2, student];
                }
            });
        });
    };
    ServiceChatImpl.prototype.listStudentCourses = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var course_student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoCourse_Student.findStudentCourses(id)];
                    case 1:
                        course_student = _a.sent();
                        return [2, course_student];
                }
            });
        });
    };
    ServiceChatImpl.prototype.sendMessage = function (message, username) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoMessage.createMessage(message, username)];
                    case 1:
                        msg = _a.sent();
                        if (!msg)
                            throw "Message was not sent.";
                        return [2, msg];
                }
            });
        });
    };
    ServiceChatImpl.prototype.findStudentById = function (studentId) {
        return __awaiter(this, void 0, void 0, function () {
            var student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;
                        return [4, this.daoStudent.findById(studentId)];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw "Student doesn't exist.";
                        }
                        else {
                            return [2, student];
                        }
                        ;
                        return [2];
                }
            });
        });
    };
    ServiceChatImpl.prototype.findStudentByUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoStudent.findByUsername(username)];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw "Student doesn't exist.";
                        }
                        else {
                            return [2, student];
                        }
                        return [2];
                }
            });
        });
    };
    ServiceChatImpl.prototype.findCourseById = function (courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var course;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoCourse.findById(courseId)];
                    case 1:
                        course = _a.sent();
                        if (!course) {
                            throw "Course doesn't exist.";
                        }
                        else {
                            return [2, course];
                        }
                        return [2];
                }
            });
        });
    };
    ServiceChatImpl.prototype.findCourseBySubject = function (subject) {
        return __awaiter(this, void 0, void 0, function () {
            var course;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoCourse.findBySubject(subject)];
                    case 1:
                        course = _a.sent();
                        return [2, course];
                }
            });
        });
    };
    ServiceChatImpl.prototype.findMessagesByCourseId = function (courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoMessage.findAllWithCourseId(courseId)];
                    case 1:
                        messages = _a.sent();
                        if (!messages) {
                            throw "There are no messages for this course.";
                        }
                        else {
                            return [2, messages];
                        }
                        return [2];
                }
            });
        });
    };
    ServiceChatImpl.prototype.createCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoCourse.create(course)];
                    case 1:
                        created = _a.sent();
                        if (!created) {
                            throw "Course wasn't created.";
                        }
                        else {
                            return [2, true];
                        }
                        return [2];
                }
            });
        });
    };
    ServiceChatImpl.prototype.createCourseStudent = function (courseStudent) {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.daoCourse_Student.create(courseStudent)];
                    case 1:
                        created = _a.sent();
                        if (!created) {
                            throw "Course wasn't created.";
                        }
                        else {
                            return [2, true];
                        }
                        return [2];
                }
            });
        });
    };
    return ServiceChatImpl;
}());
exports.default = ServiceChatImpl;
//# sourceMappingURL=ServiceChatImpl.js.map