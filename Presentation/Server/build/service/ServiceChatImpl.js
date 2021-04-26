"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = __importDefault(require("../domain/Entity/Student"));
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
    ServiceChatImpl.prototype.login = function (id, password) {
        var student = this.daoStudent.findById(id);
        if (student.valueOf() == "No existe!!") {
            throw "No existe!!";
        }
        else {
            var st = Object.assign(new Student_1.default(0, '', '', ''), student);
            if (st.getPassword() != password) {
                throw "Wrong password";
            }
            else {
                return st;
            }
        }
    };
    ServiceChatImpl.prototype.listStudentCourses = function (id) {
        var course_student = this.daoCourse_Student.findStudentCourses(id);
        console.log(course_student);
        var courseList = this.daoCourse.findAllWithStudentId(course_student);
        console.log(3);
        if (course_student.valueOf() == "No tiene secciones") {
            throw "no tiene secciones";
        }
        else if (courseList.valueOf() == "no hay secciones") {
            throw "no hay secciones";
        }
        else {
            return courseList;
        }
    };
    ServiceChatImpl.prototype.sendMessage = function (message) {
    };
    ServiceChatImpl.prototype.findStudentById = function (studentId) {
        var student = this.daoStudent.findById(studentId);
        if (!student) {
            throw "No existe el estudiante!";
        }
        else {
            return student;
        }
        ;
    };
    ServiceChatImpl.prototype.findCourseById = function (courseId) {
        var course = this.daoCourse.findById(courseId);
        if (!course) {
            throw "No existe el curso";
        }
        else {
            return course;
        }
    };
    ServiceChatImpl.prototype.findMessagesByCourseId = function (courseId) {
        var messages = this.daoMessage.findAllWithCourseId(courseId);
        if (!messages) {
            throw "No hay mensajes en ese curso";
        }
        else {
            return messages;
        }
    };
    return ServiceChatImpl;
}());
exports.default = ServiceChatImpl;
//# sourceMappingURL=ServiceChatImpl.js.map