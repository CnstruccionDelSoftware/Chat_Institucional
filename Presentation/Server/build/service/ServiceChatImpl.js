"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = __importDefault(require("../domain/Entity/Student"));
var DaoImplStudent_1 = __importDefault(require("../repository/daoImpl/DaoImplStudent"));
var DaoImplCourse_1 = __importDefault(require("../repository/daoImpl/DaoImplCourse"));
var DaoImplCourse_Student_1 = __importDefault(require("../repository/daoImpl/DaoImplCourse_Student"));
var ServiceChatImpl = (function () {
    function ServiceChatImpl() {
        this.daoStudent = new DaoImplStudent_1.default();
        this.daoCourse = new DaoImplCourse_1.default();
        this.daoCourse_Student = new DaoImplCourse_Student_1.default();
    }
    ServiceChatImpl.prototype.login = function (id, password) {
        var student = this.daoStudent.findById(id);
        if (student.valueOf() == "No existe!!") {
            return "No existe!!";
        }
        else {
            var st = Object.assign(new Student_1.default(0, '', '', ''), student);
            if (st.getPassword() != password) {
                return "Wrong password";
            }
            else {
                return st;
            }
        }
    };
    ServiceChatImpl.prototype.listStudentCourses = function (id) {
        var course_student = this.daoCourse_Student.findStudentAllCourses(id);
        var courselist = this.daoCourse.findAll();
        if (course_student.valueOf() == "No tiene secciones") {
            return "no tiene secciones";
        }
        else if (courselist.valueOf() == "no hay secciones") {
            return "no hay secciones";
        }
        else {
        }
    };
    return ServiceChatImpl;
}());
exports.default = ServiceChatImpl;
//# sourceMappingURL=ServiceChatImpl.js.map