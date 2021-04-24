//import Student from "../domain/Entity/Student";
import Course from "../domain/Entity/Course";
import Student from "../domain/Entity/Student";

interface ServiceChat{

    login(id:number,password:string) : Student | string;

    listStudentCourses(id:number) : Array<Course> | string;

}

export default ServiceChat;