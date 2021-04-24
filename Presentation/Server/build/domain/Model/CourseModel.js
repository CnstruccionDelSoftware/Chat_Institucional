"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseModel = (function () {
    function CourseModel(id_courseModel, subject, students_list, messages_list) {
        this.id_courseModel = id_courseModel;
        this.subject = subject;
        this.students_list = students_list;
        this.messages_list = messages_list;
    }
    CourseModel.prototype.getId_courseModel = function () {
        return this.id_courseModel;
    };
    CourseModel.prototype.setId_courseModel = function (id_courseModel) {
        this.id_courseModel = id_courseModel;
    };
    CourseModel.prototype.getSubject = function () {
        return this.subject;
    };
    CourseModel.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    CourseModel.prototype.getStudents_list = function () {
        return this.students_list;
    };
    CourseModel.prototype.setStudents_list = function (students_list) {
        this.students_list = students_list;
    };
    CourseModel.prototype.getMessages_list = function () {
        return this.messages_list;
    };
    CourseModel.prototype.setMessages_list = function (messages_list) {
        this.messages_list = messages_list;
    };
    return CourseModel;
}());
exports.default = CourseModel;
//# sourceMappingURL=CourseModel.js.map