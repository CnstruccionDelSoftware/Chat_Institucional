import {Router, Request, Response} from 'express';
import path from 'path';
import catchErrors from '../helper/errorHandler';
import {getMessagesOfCourse,createCourse, addStudentToCourse} from '../controllers/courseController';
import auth from '../helper/auth';
 

const router = Router();

// router.get('/',(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,'..','..','www','index.html'));
// })

router.get("/messages", auth,catchErrors(getMessagesOfCourse))
router.post("/create",auth,catchErrors(createCourse))
router.post("/addStudent", auth,catchErrors(addStudentToCourse))

export default router;