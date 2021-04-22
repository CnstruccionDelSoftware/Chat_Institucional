import {Router, Request, Response} from 'express';
import path from 'path';

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,'..','..','www','index.html'));
})


export default router;