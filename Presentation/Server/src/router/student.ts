import {Router, Request, Response} from 'express';
import path from 'path';
import catchErrors from '../helper/errorHandler';
import {getStudentCourses} from '../controllers/studentController';
import auth from "../helper/auth";
 

const router = Router();

// router.get('/',(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,'..','..','www','index.html'));
// })


router.get("/getCourses", auth,catchErrors(getStudentCourses))

export default router;