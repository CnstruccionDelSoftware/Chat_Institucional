import IReadable from "./IReadable";
import {IStudent} from "../../domain/Model/Student"

interface DaoStudent extends IReadable<IStudent,string>{
    findByUsernameAndPassword(username:string,password:string) : Promise<IStudent|null>;
    findByUsername(username:string) : Promise<IStudent|null>;

}

export default DaoStudent;
