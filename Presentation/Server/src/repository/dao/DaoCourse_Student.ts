
import Course_Student from "../../domain/Entity/Course_Student";
import IReadable from "./IReadable";

interface DaoCourse_Student extends IReadable<Course_Student,number>{
    findStudentAllCourses(id:number): string | Array<Course_Student>
}

export default DaoCourse_Student;