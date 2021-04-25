//import MessageModel from "../domain/Model/MessageModel";

import Student from "../domain/Entity/Student";
import ServiceChatImpl from '../service/ServiceChatImpl';
import {Request, Response} from 'express';
const jwt = require('jwt-then');


// let username = document.getElementById('usr');
// let password = document.getElementById('psw');
// let btn = document.getElementById('btn')

// class LoginController

//     // login(id: number , password:string){
//     //     Login.io.emit('login:chat',id,password);
//     // }

//     // getCourses(id:number){
//     //     Login.io.emit('courseList:chat',id);
//     // }
    
//     public static async function: any loginUser(req:any,res:any) {
//         const {id, password} = req.body;
        
//         const student:Student = this.serviceChat.login(id, password);

//         res.json({
//             message: "User logged in succesfully!",
//         })
//     }

//     //sendMessage(message:MessageModel){
//     //    Login.io.emit('sendMessage:chat',message);
//     //}

//     //sendMessage(message:any){
//     //    Login.io.emit('sendMessage:chat',JSON.stringify(message));
//     //}

// }

const serviceChat:ServiceChatImpl = new ServiceChatImpl();

export const loginUser = (req:Request,res:Response) => {
    try{

        //const {id, password} = req.body;
        console.log(req.body);

        //const student:Student = serviceChat.login(id, password);

        res.json({
            message: "User logged in succesfully!",
        })
    } catch {
        res.status(401).json({
            message: "User error!"
        })
    }
    

    
}

// Login.io = socket;

// function messageReceived(respose:any){

// }

// let login:Login = new Login(messageReceived);

//probando servicio login
// login.login(1,'123');

// //probando servicio get courses
// login.getCourses(1);


//var m = {idest:1,idcr:1,content:'como estan'};
//var mjson = JSON.stringify(m);
//login.sendMessage(mjson);
//probando servicio sendMessage
//var s = new Array<Student>(new Student(4,'angelo',"gonzales",'abcd'), 
//                          new Student(5,'ana',"paredes",'12345'));

//var m = new Array<MessageModel>();

//var c = new CourseModel(3,'Lenguas',s,m);

//var mo = new MessageModel(6,s[0],c,'hollllla');




