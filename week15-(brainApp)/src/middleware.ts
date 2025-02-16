import jwt from 'jsonwebtoken';
import { jwt_screats } from "./config";
import { NextFunction, Request, Response } from 'express';

export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.token
    //const token = req.headers.["authorization"];
    const userVerification = jwt.verify(token as string,jwt_screats);
    
    if(userVerification){
        //@ts-ignore
        req.id = userVerification.id;
        next();
    }else{
        res.json({
            msg : "login first"
        })
    }
}

