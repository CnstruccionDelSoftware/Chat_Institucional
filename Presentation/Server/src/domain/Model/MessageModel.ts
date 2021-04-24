import Student from "../Entity/Student";
import CourseModel from "./CourseModel";

class MessageModel{

    private id_messageModel:number;
    private student:Student;
    private course:CourseModel;
    private content:string;

    constructor(id_messageModel:number,student:Student,course:CourseModel,content:string){
        this.id_messageModel = id_messageModel;
        this.student = student;
        this.course = course;
        this.content = content;
    }

    
    public getId_messageModel(): number {
        return this.id_messageModel;
    }

    public setId_messageModel(id_messageModel: number): void {
        this.id_messageModel = id_messageModel;
    }

    public getStudent(): Student {
        return this.student;
    }

    public setStudent(student: Student): void {
        this.student = student;
    }

    public getCourse(): CourseModel {
        return this.course;
    }

    public setCourse(course: CourseModel): void {
        this.course = course;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }



}

export default MessageModel;