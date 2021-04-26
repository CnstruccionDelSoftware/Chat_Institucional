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
            throw "no hay secciones";
        }
        else {
            return courseList;
        }
    };
    DaoImplCourse.prototype.findAllWithStudentId = function (courseStudentList) {
        var _this = this;
        ;
        var courseListWithStudents = [];
        courseStudentList.forEach(function (Course_Student) {
            var temp = _this.course_list.find(function (course) { return course.getId_course() === Course_Student.getId_course(); });
            courseListWithStudents.push(temp);
        });
        if (this.course_list == null) {
            throw "no hay secciones";
        }
        else if (courseListWithStudents.length == 0) {
            throw "no hay secciones con ese estudiante";
        }
        else {
            return courseListWithStudents;
        }
    };
    DaoImplCourse.prototype.findById = function (id) {
        var course = this.course_list.find(function (course) { return course.getId_course() == id; });
        return course;
    };
    return DaoImplCourse;
}());
exports.default = DaoImplCourse;
//# sourceMappingURL=DaoImplCourse.js.map