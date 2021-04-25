//import Student from "../domain/Entity/Student";
import Course from "../domain/Entity/Course";
import Student from "../domain/Entity/Student";
import MessageModel from "../domain/Model/MessageModel";

interface ServiceChat{

    login(id:number,password:string) : Student;

    listStudentCourses(id:number) : Array<Course>;

    sendMessage(message:MessageModel) : void;

}

export default ServiceChat;