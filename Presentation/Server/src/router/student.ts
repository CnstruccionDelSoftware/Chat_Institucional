import {Router, Request, Response} from 'express';
import path from 'path';
import catchErrors from '../helper/errorHandler';
import {getStudentCourses} from '../controllers/studentController';
import auth from "../helper/auth";
import {loginStudent, registerStudent} from '../controllers/loginController';

const router = Router();

// router.get('/',(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,'..','..','www','index.html'));
// })


router.get("/courses", auth,catchErrors(getStudentCourses))
router.post("/login", catchErrors(loginStudent))
router.post("/register", catchErrors(registerStudent))

export default router;