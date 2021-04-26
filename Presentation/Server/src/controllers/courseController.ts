import Message from "../domain/Entity/Message";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
import Course from "../domain/Entity/Course";


const jwt = require('jwt-then');

const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const getMessagesOfCourse = async (req:Request,res:Response) => {
    try{
        const {id} = req.body;

        const course:any = serviceChat.findCourseById(id);

        const messages:Array<Message> = serviceChat.findMessagesByCourseId(id);

        res.json({
           messages
        })
    } catch {
        res.status(401).json({
            message: "User error!",
        })
    }
}