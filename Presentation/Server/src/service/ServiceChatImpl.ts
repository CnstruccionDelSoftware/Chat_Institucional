import ServiceChat from "./ServiceChat";
import {IStudent} from "../domain/Model/Student";
import DaoImplStudent from "../repository/daoImpl/DaoImplStudent";
import DaoStudent from "../repository/dao/DaoStudent";
import {ICourse} from "../domain/Model/Course";
import DaoCourse from "../repository/dao/DaoCourse"; 
import DaoImplCourse from "../repository/daoImpl/DaoImplCourse";
import DaoCourse_Student from "../repository/dao/DaoCourse_Student";
import DaoImplCourse_Student from "../repository/daoImpl/DaoImplCourse_Student";
import {ICourseStudent} from "../domain/Model/CourseStudent";
import {IMessage} from "../domain/Model/Message";
import DaoMessage from "../repository/dao/DaoMessage";
import DaoImplMessage from "../repository/daoImpl/DaoImplMessage";
import jwt from "jwt-then";

class ServiceChatImpl implements ServiceChat{
    
    private daoStudent:DaoStudent = new DaoImplStudent();
    private daoCourse:DaoCourse = new DaoImplCourse();
    private daoCourse_Student:DaoCourse_Student = new DaoImplCourse_Student();
    private daoMessage:DaoMessage = new DaoImplMessage();

    async login(username: string, password: string): Promise<IStudent> {
        const student : IStudent | null  = await this.daoStudent.findByUsernameAndPassword(username, password);

        if(!student) throw "Username and password did not match.";

        return student;
    }

    async listStudentCourses(id: string): Promise<Array<ICourse>|null> {
        const course_student : Array<ICourse> | null = await this.daoCourse_Student.findStudentCourses(id);

        return course_student; 
    }
    
    async sendMessage(message: IMessage, username: string): Promise<IMessage> {
        const msg = await this.daoMessage.createMessage(message, username);
        if(!msg) throw "Message was not sent."

        return msg;
    }

    async findStudentById(studentId:string):Promise<IStudent|null>{;
        const student : IStudent | null = await this.daoStudent.findById(studentId);
        if (!student) {
            throw "Student doesn't exist."
        } else {
            return student;
        };
    }

    async findStudentByUsername(username:string):Promise<IStudent|null>{
        const student: IStudent | null = await this.daoStudent.findByUsername(username)

        if(!student){
            throw "Student doesn't exist.";
        } else {
            return student;
        }
    }

    async findCourseById(courseId:string): Promise<ICourse|null>{
        const course: ICourse | null = await this.daoCourse.findById(courseId);

        if(!course){
            throw "Course doesn't exist."
        } else {
            return course;
        }
    }

    async findCourseBySubject(subject:string) : Promise<ICourse|null> {
        const course: ICourse | null = await this.daoCourse.findBySubject(subject);

        return course;

    }

    async findMessagesByCourseId(courseId:string): Promise<Array<IMessage>|null> {
        const messages : Array<IMessage> | null = await this.daoMessage.findAllWithCourseId(courseId);
        if(!messages){
            throw "There are no messages for this course.";
        } else {
            return messages;
        }
    }

    async createCourse(course:ICourse): Promise<boolean> {
        const created:boolean = await this.daoCourse.create(course)
        if(!created){
            throw "Course wasn't created.";
        } else {
            return true;
        }
    }

    async createCourseStudent(courseStudent:ICourseStudent): Promise<boolean> {
        const created : boolean = await this.daoCourse_Student.create(courseStudent)
        if(!created){
            throw "Course wasn't created.";
        } else {
            return true;
        }
    }
}

export default ServiceChatImpl;