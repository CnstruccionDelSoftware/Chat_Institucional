"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(id_message, id_student, id_course, content) {
        this.id_message = id_message;
        this.id_student = id_student;
        this.id_course = id_course;
        this.content = content;
    }
    Message.prototype.getId_message = function () {
        return this.id_message;
    };
    Message.prototype.setId_message = function (id_message) {
        this.id_message = id_message;
    };
    Message.prototype.getId_student = function () {
        return this.id_student;
    };
    Message.prototype.setId_student = function (id_student) {
        this.id_student = id_student;
    };
    Message.prototype.getId_course = function () {
        return this.id_course;
    };
    Message.prototype.setId_course = function (id_course) {
        this.id_course = id_course;
    };
    Message.prototype.getContent = function () {
        return this.content;
    };
    Message.prototype.setContent = function (content) {
        this.content = content;
    };
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=Message.js.map