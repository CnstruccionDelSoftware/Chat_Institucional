"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = (function () {
    function Course(id_course, subject) {
        this.id_course = id_course;
        this.subject = subject;
    }
    Course.prototype.getId_course = function () {
        return this.id_course;
    };
    Course.prototype.setId_course = function (id_course) {
        this.id_course = id_course;
    };
    Course.prototype.getSubject = function () {
        return this.subject;
    };
    Course.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    return Course;
}());
exports.default = Course;
//# sourceMappingURL=Course.js.map