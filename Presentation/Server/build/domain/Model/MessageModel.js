"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageModel = (function () {
    function MessageModel(id_messageModel, student, course, content) {
        this.id_messageModel = id_messageModel;
        this.student = student;
        this.course = course;
        this.content = content;
    }
    MessageModel.prototype.getId_messageModel = function () {
        return this.id_messageModel;
    };
    MessageModel.prototype.setId_messageModel = function (id_messageModel) {
        this.id_messageModel = id_messageModel;
    };
    MessageModel.prototype.getStudent = function () {
        return this.student;
    };
    MessageModel.prototype.setStudent = function (student) {
        this.student = student;
    };
    MessageModel.prototype.getCourse = function () {
        return this.course;
    };
    MessageModel.prototype.setCourse = function (course) {
        this.course = course;
    };
    MessageModel.prototype.getContent = function () {
        return this.content;
    };
    MessageModel.prototype.setContent = function (content) {
        this.content = content;
    };
    return MessageModel;
}());
exports.default = MessageModel;
//# sourceMappingURL=MessageModel.js.map