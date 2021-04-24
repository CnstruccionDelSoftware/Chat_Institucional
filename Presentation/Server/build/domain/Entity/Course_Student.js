"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course_Student = (function () {
    function Course_Student(id_course_student, id_course, id_student) {
        this.id_course_student = id_course_student;
        this.id_course = id_course;
        this.id_student = id_student;
    }
    Course_Student.prototype.getId_course_student = function () {
        return this.id_course_student;
    };
    Course_Student.prototype.setId_course_student = function (id_course_student) {
        this.id_course_student = id_course_student;
    };
    Course_Student.prototype.getId_course = function () {
        return this.id_course;
    };
    Course_Student.prototype.setId_course = function (id_course) {
        this.id_course = id_course;
    };
    Course_Student.prototype.getId_student = function () {
        return this.id_student;
    };
    Course_Student.prototype.setId_student = function (id_student) {
        this.id_student = id_student;
    };
    return Course_Student;
}());
exports.default = Course_Student;
//# sourceMappingURL=Course_Student.js.map