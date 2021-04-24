
class Message{

    private id_message:number;
    private id_student:number;
    private id_course:number;
    private content:string;

    constructor(id_message:number,id_student:number,id_course:number,content:string){
        this.id_message = id_message;
        this.id_student = id_student;
        this.id_course = id_course;
        this.content = content;
    }

    public getId_message(): number {
        return this.id_message;
    }

    public setId_message(id_message: number): void {
        this.id_message = id_message;
    }

    public getId_student(): number {
        return this.id_student;
    }

    public setId_student(id_student: number): void {
        this.id_student = id_student;
    }

    public getId_course(): number {
        return this.id_course;
    }

    public setId_course(id_course: number): void {
        this.id_course = id_course;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }
}

export default Message;