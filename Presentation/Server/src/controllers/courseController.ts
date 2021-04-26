import {IMessage,Message} from "../domain/Model/Message";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
import {ICourse, Course} from "../domain/Model/Course";
import { IStudent } from "../domain/Model/Student";
import { CourseStudent, ICourseStudent } from "../domain/Model/CourseStudent";
import mongoose from 'mongoose';

const jwt = require('jwt-then');

const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const getMessagesOfCourse = async (req:Request,res:Response) => {
    try{
        const id = req.param('id');

        const messages:Array<IMessage> | null = await serviceChat.findMessagesByCourseId(id);

        res.json({
           messages,
           
        })

    } catch (err) {
        res.status(401).json({
            message: err,
        })
    }
}

export const createCourse = async (req:Request,res:Response) => {
    try{
        const {subject} = req.body;

        const courseExists: ICourse | null = await serviceChat.findCourseBySubject(subject);
        if(courseExists) throw "Course already exists";

        const created: boolean = await serviceChat.createCourse(new Course({subject:subject}));

        if(!created){
            throw "Course wasn't created";
        } else {
            res.json({
                message: "Course added sucessfully"
            })
        }

        
    } catch (err) {
        res.status(401).json({
            message: err,
        })
    }
}

export const addStudentToCourse = async (req:Request,res:Response) => {
    try{
        const {username, subject} = req.body;

        const studentExists: IStudent | null = await serviceChat.findStudentByUsername(username);
        if(!studentExists) throw "Student doesn't exist.";

        const courseExists: ICourse | null = await serviceChat.findCourseBySubject(subject);
        if(!courseExists) throw "Course doesn't exist.";

        const studentCourses: ICourse[] | null = await serviceChat.listStudentCourses(studentExists._id);
        if(studentCourses?.includes(courseExists)) throw "Student already in course."

        const created: ICourseStudent | null = await CourseStudent.create({
            id_student:mongoose.Types.ObjectId(studentExists._id),
            id_course:mongoose.Types.ObjectId(courseExists._id)
        });

        if(!created) {
            throw "Course wasn't created"
        } else {
            res.json({
                message: "Course was added successfully;",
            })
        }

    } catch (err) {
        res.status(401).json({
            message: err,
        })
    }
}

