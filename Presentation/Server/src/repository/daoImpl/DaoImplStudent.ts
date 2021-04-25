import DaoStudent from "../dao/DaoStudent";
import Student from "../../domain/Entity/Student";

class DaoImplStudent implements DaoStudent {

    student_list:Array<Student> = [new Student(1,'adriel','rosario','123') , 
                                   new Student(2,'alex','rosario','321') , 
                                   new Student(3,'alexis','Moises','abc')];

    findAll(): Student[]{
        throw new Error("Method not implemented.");
    }
    findById(id: number): Student {
        //se le agrega "!" para que el valor de retorno pueda ser null
        const student = this.student_list.find(e => e.getId_student() == id)!;

        if(student == null){
            throw "No existe!!"
        }else{
            return student;
        }
    }

}

export default DaoImplStudent;