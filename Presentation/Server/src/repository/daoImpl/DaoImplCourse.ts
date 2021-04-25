import Course from "../../domain/Entity/Course";
import DaoCourse from "../dao/DaoCourse";

class DaoImplCourse implements DaoCourse {
    
    course_list:Array<Course> = [new Course(1, 'Matematica') , new Course(2 ,'Ingles')];

    findAll(): Course[]{
        const courseList = this.course_list;
        if(courseList == null){
            throw "no hay secciones";
        }else{
            return courseList;
        }
        
    }
    findById(id: number): Course {
        throw new Error("Method not implemented.");
    }

}

export default DaoImplCourse;