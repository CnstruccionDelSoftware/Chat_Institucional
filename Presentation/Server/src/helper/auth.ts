const jwt = require('jwt-then');
import {Request, Response, NextFunction} from 'express';


const auth = async (req:any,res:any,next:any) => {
    try {
        if(!req.headers.authorization) throw "Forbidden!";
        const token = req.headers.authorization.split(' ')[1];
        const payload = await jwt.verify(token,process.env.SECRET);
        req.payload = payload;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Authentication ERROR!"
        })
    }
}

export default auth;