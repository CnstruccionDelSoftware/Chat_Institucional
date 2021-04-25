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
        var courselist = this.daoCourse.findAll();
        if (course_student.valueOf() == "No tiene secciones") {
            throw "no tiene secciones";
        }
        else if (courselist.valueOf() == "no hay secciones") {
            throw "no hay secciones";
        }
        else {
            var cs = Object.assign(new Array(), course_student);
            var cl = Object.assign(new Array(), courselist);
            var res = new Array();
            for (var i = 0; i < cl.length; i++) {
                for (var j = 0; j < cs.length; j++) {
                    if (cl[i].getId_course() == cs[j].getId_course()) {
                        res.push(cl[i]);
                    }
                }
            }
            return res;
        }
    };
    ServiceChatImpl.prototype.sendMessage = function (message) {
    };
    return ServiceChatImpl;
}());
exports.default = ServiceChatImpl;
//# sourceMappingURL=ServiceChatImpl.js.map