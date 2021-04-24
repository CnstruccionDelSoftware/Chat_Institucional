"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = __importDefault(require("../../domain/Entity/Course"));
var DaoImplCourse = (function () {
    function DaoImplCourse() {
        this.course_list = [new Course_1.default(1, 'Matematica'), new Course_1.default(2, 'Ingles')];
    }
    DaoImplCourse.prototype.findAll = function () {
        var courseList = this.course_list;
        if (courseList == null) {
            return "no hay secciones";
        }
        else {
            return courseList;
        }
    };
    DaoImplCourse.prototype.findById = function (id) {
        throw new Error("Method not implemented.");
    };
    return DaoImplCourse;
}());
exports.default = DaoImplCourse;
//# sourceMappingURL=DaoImplCourse.js.map