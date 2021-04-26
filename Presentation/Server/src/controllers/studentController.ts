import {IStudent} from "../domain/Model/Student";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
import {ICourse} from "../domain/Model/Course";

const jwt = require('jwt-then');

const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const getStudentCourses = async (req:Request,res:Response) => {
    try{
        const username = req.param('username');
        console.log(username)

        const studentExists: IStudent | null = await serviceChat.findStudentByUsername(username);

        if(!studentExists) throw "Student doesn't exist.";

        const studentCourses : ICourse[] | null = await serviceChat.listStudentCourses(studentExists._id);
        //console.log(studentCourses);

        res.json({
           studentCourses
        })
    } catch {
        res.status(401).json({
            message: "User error!",
        })
    }
    
}