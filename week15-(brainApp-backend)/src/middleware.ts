import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwt_screats } from "./config";
import { NextFunction, Request, Response } from 'express';

export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    //const token = req.headers.token
    
    const token = req.headers["authorization"]
    //const token = req.headers.["Authorization"];
    const userVerification = jwt.verify(token as string,jwt_screats);
    
    if(userVerification){
        //@ts-ignore no need
        // req.id = userVerification.id;
        req.id = (userVerification as JwtPayload).id;
        next();
    }else{
        res.json({
            msg : "login first"
        })
    }
}

