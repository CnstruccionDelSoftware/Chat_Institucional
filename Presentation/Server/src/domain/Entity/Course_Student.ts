
class Course_Student{

    private id_course_student:number;
    private id_course:number;
    private id_student:number;

    constructor(id_course_student:number,id_course:number,id_student:number){
        this.id_course_student = id_course_student;
        this.id_course = id_course;
        this.id_student = id_student;
    }

    public getId_course_student(): number {
        return this.id_course_student;
    }

    public setId_course_student(id_course_student: number): void {
        this.id_course_student = id_course_student;
    }

    public getId_course(): number {
        return this.id_course;
    }

    public setId_course(id_course: number): void {
        this.id_course = id_course;
    }

    public getId_student(): number {
        return this.id_student;
    }

    public setId_student(id_student: number): void {
        this.id_student = id_student;
    }

}

export default Course_Student;