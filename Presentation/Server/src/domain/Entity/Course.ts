
class Course{

    private id_course:number;
    private subject:string;
    
    constructor(id_course:number,subject:string){
        this.id_course = id_course;
        this.subject = subject;
    }

    public getId_course(): number {
        return this.id_course;
    }

    public setId_course(id_course: number): void {
        this.id_course = id_course;
    }

    public getSubject(): string {
        return this.subject;
    }

    public setSubject(subject: string): void {
        this.subject = subject;
    }

}

export default Course;