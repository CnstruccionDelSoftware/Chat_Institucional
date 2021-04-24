

class Student{
    
    private id_student:number;
    private name:string;
    private lastname:string;
    private password:string;

    constructor(id_student:number,name:string,lastname:string,password:string){
        this.id_student = id_student;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }

    public getId_student(): number {
        return this.id_student;
    }

    public setId_student(id_student: number): void {
        this.id_student = id_student;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }



}

export default Student;