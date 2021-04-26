import Student from "../domain/Entity/Course";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
import Course from "../domain/Entity/Course";


const jwt = require('jwt-then');

const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const getStudentCourses = async (req:Request,res:Response) => {
    try{
        const {id} = req.body;

        const student:any = serviceChat.findStudentById(id);

        const studentCourses:Array<Course> = serviceChat.listStudentCourses(id);
        console.log(studentCourses);


        res.json({
           studentCourses
        })
    } catch {
        res.status(401).json({
            message: "User error!",
        })
    }
    
}