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
import MessageModel from "../domain/Model/MessageModel";
import DaoMessage from "../repository/dao/DaoMessage";
import DaoImplMessage from "../repository/daoImpl/DaoImplMessage";
import Message from "../domain/Entity/Message";

class ServiceChatImpl implements ServiceChat{
    
    private daoStudent:DaoStudent = new DaoImplStudent();
    private daoCourse:DaoCourse = new DaoImplCourse();
    private daoCourse_Student:DaoCourse_Student = new DaoImplCourse_Student();
    private daoMessage:DaoMessage = new DaoImplMessage();

    login(id: number, password: string): Student {
        const student = this.daoStudent.findById(id);
        if(student.valueOf() == "No existe!!"){
            throw "No existe!!"
        }else{
            const st = Object.assign(new Student(0,'','',''), student);
            if(st.getPassword() != password){
                throw "Wrong password";
            }
            else{
                return st;
            }
        }
    }

    listStudentCourses(id: number): Array<Course> {
        const course_student = this.daoCourse_Student.findStudentCourses(id);
        const courselist = this.daoCourse.findAll();

        if(course_student.valueOf() == "No tiene secciones"){
            throw "no tiene secciones";
        }
        else if(courselist.valueOf() == "no hay secciones"){
            throw "no hay secciones";
        }
        else {
            var cs = Object.assign(new Array<Course_Student>(),course_student); 
            var cl = Object.assign(new Array<Course>(),courselist);
            var res = new Array<Course>();

            for(var i=0;i < cl.length;i++){
                for(var j=0; j<cs.length; j++){
                    if(cl[i].getId_course() == cs[j].getId_course()){
                        res.push(cl[i]);
                    }
                }
            }
            return res; 
        }
    }
    
    sendMessage(message:MessageModel): void {

    }

    
    
}

export default ServiceChatImpl;