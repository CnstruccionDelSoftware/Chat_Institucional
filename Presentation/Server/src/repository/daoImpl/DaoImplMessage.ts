import DaoMessage from "../dao/DaoMessage";
import {Message,IMessage} from "../../domain/Model/Message";


class DaoImplMessage implements DaoMessage{

    async create(entity: IMessage): Promise<boolean> {
        try {
            await entity.save();
            return true;
        } catch {
            return false;
        }
    }

    async createMessage(entity: IMessage, username: string) : Promise<IMessage|null>{
        try {
            await entity.save();
            return entity;
        } catch {
            return null;
        }
    }

    async modify(entity: IMessage): Promise<IMessage|null> {
        const message : IMessage | null = await Message.findOneAndReplace({_id:entity._id})

        return message;
    }

    async findAll(): Promise<IMessage[]> {
        const messages : Array<IMessage> | null = await Message.find();
        return messages;
    }

    async findAllWithCourseId(courseId:string):Promise<Array<IMessage>>{
        const messages : Array<IMessage> | null = await Message.find({id_course:courseId});
        return messages;
    }

}

export default DaoImplMessage;