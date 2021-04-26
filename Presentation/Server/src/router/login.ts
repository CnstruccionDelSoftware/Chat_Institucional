import {Router, Request, Response} from 'express';
import path from 'path';
import catchErrors from '../helper/errorHandler';
import {loginUser} from '../controllers/loginController';
 

const router = Router();

// router.get('/',(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,'..','..','www','index.html'));
// })


//router.post("/user/login",catchErrors(loginUser))
router.post("/", catchErrors(loginUser))

export default router;