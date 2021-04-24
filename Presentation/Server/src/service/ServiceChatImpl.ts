import ServiceChat from "./ServiceChat";
import Student from "../domain/Entity/Student";
import DaoImplStudent from "../repository/daoImpl/DaoImplStudent";
import DaoStudent from "../repository/dao/DaoStudent";
import Course from "../domain/Entity/Course";
import DaoCourse from "../repository/dao/DaoCourse"; 
import DaoImplCourse from "../repository/daoImpl/DaoImplCourse";
import DaoCourse_Student from "../repository/dao/DaoCourse_Student";
import DaoImplCourse_Student from "../repository/daoImpl/DaoImplCourse_Student";
import Course_Student from "../domain/Entity/Course_Student";

class ServiceChatImpl implements ServiceChat{
    
    private daoStudent:DaoStudent = new DaoImplStudent();
    private daoCourse:DaoCourse = new DaoImplCourse();
    private daoCourse_Student:DaoCourse_Student = new DaoImplCourse_Student();

    login(id: number, password: string): string | Student {
        const student = this.daoStudent.findById(id);
        if(student.valueOf() == "No existe!!"){
            return "No existe!!"
        }else{
            const st = Object.assign(new Student(0,'','',''), student);
            if(st.getPassword() != password){
                return "Wrong password";
            }
            else{
                return st;
            }
        }
    }

    listStudentCourses(id: number): string | Array<Course> {
        const course_student = this.daoCourse_Student.findStudentAllCourses(id);
        const courselist = this.daoCourse.findAll();

        if(course_student.valueOf() == "No tiene secciones"){
            return "no tiene secciones";
        }
        else if(courselist.valueOf() == "no hay secciones"){
            return "no hay secciones"
        }
        else {
            
        }
        
    }



}

export default ServiceChatImpl;