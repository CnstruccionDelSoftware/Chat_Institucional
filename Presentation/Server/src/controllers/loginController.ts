import {IStudent, Student} from "../domain/Model/Student";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
const jwt = require('jwt-then');
import CryptoJS from 'crypto-js';


const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const loginStudent = async (req:Request,res:Response) => {
    try{
        const {username, password} = req.body;

        const student : IStudent | null = await serviceChat.login(username, CryptoJS.SHA256(password+process.env.SALT).toString());

        const token = await jwt.sign({username:username}, process.env.SECRET)

        student.password = '';

        res.json({
            message: "User logged in succesfully!",
            token,
            student
        })
    } catch(err) {
        res.status(401).json({
            message: err,
        })
    }
}

export const registerStudent = async (req:Request, res:Response) => {
    try {
        const {username, password, name, lastname} = req.body;

        const studentExists: IStudent | null = await Student.findOne({username});
        if(studentExists) throw "Student already exists";

        const student: IStudent = await Student.create({
            username: username,
            password : CryptoJS.SHA256(password+process.env.SALT).toString(),
            name: name,
            lastname : lastname
        })

        student.save();

        res.json({
            message: "User registered succesfully!",
        })
        
    } catch(err) {
        res.status(401).json({
            message: err,
        })
    }
}




