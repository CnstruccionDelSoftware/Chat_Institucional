import Course from "../../domain/Entity/Course";
import Course_Student from "../../domain/Entity/Course_Student";
import DaoCourse_Student from "../dao/DaoCourse_Student";

class DaoImplCourse_Student implements DaoCourse_Student {
    
    //id // course_id // studen_id
    course_student_list:Array<Course_Student> = [new Course_Student(1,1,1),
                                                 new Course_Student(2,2,2),
                                                 new Course_Student(3,1,2)];


    findAll(): Course_Student[] {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Course_Student {
        throw new Error("Method not implemented.");
    }

    findStudentCourses(id: number): Course_Student[] {
        // const courseList = this.course_student_list.filter(cr => cr.getId_student() === id)!;
        // console.log("Courselist"+courseList)

        // if(courseList == null){
        //     throw "No tiene secciones";
        // }else{
        //     return courseList;
        // }
        let courseStudent:Course_Student[] = [];
        courseStudent.push(this.course_student_list[1])
        courseStudent.push(this.course_student_list[2])

        return courseStudent;
    }

}

export default DaoImplCourse_Student;