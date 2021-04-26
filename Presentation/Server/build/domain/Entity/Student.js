"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(id_student, username, name, lastname, password) {
        this.username = username;
        this.id_student = id_student;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    Student.prototype.getId_student = function () {
        return this.id_student;
    };
    Student.prototype.setId_student = function (id_student) {
        this.id_student = id_student;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getLastname = function () {
        return this.lastname;
    };
    Student.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    Student.prototype.getPassword = function () {
        return this.password;
    };
    Student.prototype.setPassword = function (password) {
        this.password = password;
    };
    Student.prototype.getUsername = function () {
        return this.username;
    };
    Student.prototype.setUsername = function (username) {
        this.username = username;
    };
    return Student;
}());
exports.default = Student;
//# sourceMappingURL=Student.js.map