import {IMessage} from "../../domain/Model/Message";
import IReadable from "./IReadable";
import IWritable from "./IWritable";

interface DaoMessage extends IWritable<IMessage>{
    findAllWithCourseId(courseId:string): Promise<IMessage[]|null>;
    createMessage(entity: IMessage, username: string) : Promise<IMessage|null>
}

export default DaoMessage;