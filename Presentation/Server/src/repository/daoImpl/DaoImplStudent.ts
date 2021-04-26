import DaoStudent from "../dao/DaoStudent";
import {Sequelize, Model, DataTypes} from 'sequelize'; 
import {IStudent, Student} from '../../domain/Model/Student';


class DaoImplStudent implements DaoStudent {

    async findAll(): Promise<Array<IStudent>|null>{
        const students: Array<IStudent> | null = await Student.find();

        return students;
    }

    async findById(id: string): Promise<IStudent|null> {
        const student : IStudent | null = await Student.findOne({_id:id})

        return student;
    }

    async findByUsernameAndPassword(username:string,password:string) : Promise<IStudent|null> {
        const student : IStudent | null = await Student.findOne({username:username, password: password})

        return student;
    }

    async findByUsername(username: string): Promise<IStudent|null>{
        const student : IStudent | null = await Student.findOne({username: username}).exec();

        return student;
    }

}

export default DaoImplStudent;