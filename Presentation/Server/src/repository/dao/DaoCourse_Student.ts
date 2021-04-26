
import {ICourseStudent} from "../../domain/Model/CourseStudent";
import {ICourse} from "../../domain/Model/Course";
import IReadable from "./IReadable";
import IWritable from "./IWritable";

interface DaoCourse_Student extends IReadable<ICourseStudent,string>, IWritable<ICourseStudent|null>{
    findStudentCourses(id:string): Promise<Array<ICourse>|null>;
}

export default DaoCourse_Student;