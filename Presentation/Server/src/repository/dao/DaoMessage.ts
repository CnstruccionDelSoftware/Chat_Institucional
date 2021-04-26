import Message from "../../domain/Entity/Message";
import IReadable from "./IReadable";
import IWritable from "./IWritable";

interface DaoMessage extends IWritable<Message>{
    findAllWithCourseId(courseId:number): Message[];
}

export default DaoMessage;