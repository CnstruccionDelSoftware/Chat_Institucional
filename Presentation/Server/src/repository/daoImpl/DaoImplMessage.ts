import Message from "../../domain/Entity/Message";
import DaoMessage from "../dao/DaoMessage";

class DaoImplMessage implements DaoMessage{

    message_list:Array<Message> = [new Message(1,1,1,'Holaa') , new Message(2,2,1,'klklk')];

    create(entity: Message): void {
        this.message_list.push(entity);
    }

    modify(entity: Message): void {
        throw new Error("Method not implemented.");
    }

    findAll():Array<Message>{
        return this.message_list;
    }

}

export default DaoImplMessage;