"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = __importDefault(require("../../domain/Entity/Student"));
var DaoImplStudent = (function () {
    function DaoImplStudent() {
        this.student_list = [new Student_1.default(1, 'adriel', 'rosario', '123'),
            new Student_1.default(2, 'alex', 'rosario', '321'),
            new Student_1.default(3, 'alexis', 'Moises', 'abc')];
    }
    DaoImplStudent.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    DaoImplStudent.prototype.findById = function (id) {
        var student = this.student_list.find(function (e) { return e.getId_student() == id; });
        if (student == null) {
            return "No existe!!";
        }
        else {
            return student;
        }
    };
    return DaoImplStudent;
}());
exports.default = DaoImplStudent;
//# sourceMappingURL=DaoImplStudent.js.map