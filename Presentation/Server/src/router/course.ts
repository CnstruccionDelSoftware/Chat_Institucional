import {Router, Request, Response} from 'express';
import path from 'path';
import catchErrors from '../helper/errorHandler';
import {getMessagesOfCourse} from '../controllers/courseController';
import auth from '../helper/auth';
 

const router = Router();

// router.get('/',(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,'..','..','www','index.html'));
// })

//router.post("/user/login",catchErrors(loginUser))
router.get("/messages", auth,catchErrors(getMessagesOfCourse))

export default router;