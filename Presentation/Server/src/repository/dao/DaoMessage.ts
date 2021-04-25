import Message from "../../domain/Entity/Message";
import IReadable from "./IReadable";
import IWritable from "./IWritable";

interface DaoMessage extends IWritable<Message>{

}

export default DaoMessage;