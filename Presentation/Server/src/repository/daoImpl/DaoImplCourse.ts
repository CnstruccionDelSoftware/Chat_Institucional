import Course from "../../domain/Entity/Course";
import Course_Student from "../../domain/Entity/Course_Student";
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

    findAllWithStudentId(courseStudentList:Course_Student[]): Array<Course>{;
        let courseListWithStudents: Course[] = [];
        courseStudentList.forEach(Course_Student => {
            const temp = this.course_list.find(course => course.getId_course() === Course_Student.getId_course());
            courseListWithStudents.push(temp!)
        });

        if(this.course_list == null ){
            throw "no hay secciones";
        } else if(courseListWithStudents.length == 0){
            throw "no hay secciones con ese estudiante"
        } else {
            return courseListWithStudents;
        }

    }

    findById(id: number): Course {
        let course = this.course_list.find(course=>course.getId_course() == id)

        return course!;
    }

}

export default DaoImplCourse;