import Student from "../Entity/Student";
import MessageModel from "./MessageModel";

class CourseModel {

    private id_courseModel:number;
    private subject:string;
    private students_list:Array<Student>;
    private messages_list:Array<MessageModel>;


    constructor(id_courseModel:number,subject:string,students_list:Array<Student>,messages_list:Array<MessageModel>){
        this.id_courseModel = id_courseModel;
        this.subject = subject;
        this.students_list = students_list;
        this.messages_list = messages_list;
    }

    public getId_courseModel(): number {
        return this.id_courseModel;
    }

    public setId_courseModel(id_courseModel: number): void {
        this.id_courseModel = id_courseModel;
    }

    public getSubject(): string {
        return this.subject;
    }

    public setSubject(subject: string): void {
        this.subject = subject;
    }

    public getStudents_list(): Array<Student> {
        return this.students_list;
    }

    public setStudents_list(students_list: Array<Student>): void {
        this.students_list = students_list;
    }

    public getMessages_list(): Array<MessageModel> {
        return this.messages_list;
    }

    public setMessages_list(messages_list: Array<MessageModel>): void {
        this.messages_list = messages_list;
    }

}

export default CourseModel;