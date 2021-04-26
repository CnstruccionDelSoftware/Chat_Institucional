import {ICourse} from "../domain/Model/Course";
import { ICourseStudent } from "../domain/Model/CourseStudent";
import {IMessage} from "../domain/Model/Message";
import {IStudent} from "../domain/Model/Student";

interface ServiceChat{

    login(id:string,password:string) : Promise<IStudent|null>;

    listStudentCourses(id:string) : Promise<Array<ICourse>|null>;

    sendMessage(message: IMessage, username:string) : Promise<IMessage>;

    findStudentById(studentId:string): Promise<IStudent|null>;

    findCourseById(courseId:string): Promise<ICourse|null>;

    findMessagesByCourseId(courseId:string): Promise<Array<IMessage>|null>;

    createCourse(course:ICourse): Promise<boolean>;

    createCourseStudent(courseStudent:ICourseStudent): Promise<boolean>;

}

export default ServiceChat;