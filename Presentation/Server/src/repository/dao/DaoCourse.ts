import Course from "../../domain/Entity/Course";
import Course_Student from "../../domain/Entity/Course_Student";

import IReadable from "./IReadable";

interface DaoCourse extends IReadable<Course,number>{
    findAllWithStudentId(courseStudentList:Course_Student[]): Course[];
}

export default DaoCourse;