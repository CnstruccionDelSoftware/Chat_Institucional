"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Course_Student_1 = __importDefault(require("../../domain/Entity/Course_Student"));
var DaoImplCourse_Student = (function () {
    function DaoImplCourse_Student() {
        this.course_student_list = [new Course_Student_1.default(1, 1, 1),
            new Course_Student_1.default(2, 2, 2),
            new Course_Student_1.default(3, 1, 2)];
    }
    DaoImplCourse_Student.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    DaoImplCourse_Student.prototype.findById = function (id) {
        throw new Error("Method not implemented.");
    };
    DaoImplCourse_Student.prototype.findStudentCourses = function (id) {
        var courseList = this.course_student_list.filter(function (cr) { return cr.getId_student() === id; });
        if (courseList == null) {
            throw "No tiene secciones";
        }
        else {
            return courseList;
        }
    };
    return DaoImplCourse_Student;
}());
exports.default = DaoImplCourse_Student;
//# sourceMappingURL=DaoImplCourse_Student.js.map