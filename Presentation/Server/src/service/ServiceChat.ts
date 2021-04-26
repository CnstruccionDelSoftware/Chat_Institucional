//import Student from "../domain/Entity/Student";
import Course from "../domain/Entity/Course";
import Message from "../domain/Entity/Message";
import Student from "../domain/Entity/Student";
import MessageModel from "../domain/Model/MessageModel";

interface ServiceChat{

    login(id:number,password:string) : Student;

    listStudentCourses(id:number) : Array<Course>;

    sendMessage(message:MessageModel) : void;

    findStudentById(studentId:number):Student;

    findCourseById(courseId:number): Course;

    findMessagesByCourseId(courseId:number): Array<Message>;
}

export default ServiceChat;