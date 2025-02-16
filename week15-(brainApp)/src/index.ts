import express from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { userModel  , contentModel} from "./database";
import { jwt_screats } from "./config";
import { userMiddleware } from "./middleware";
import zod from 'zod';
import bcrypt from 'bcrypt';
import { local_url } from "./config";

const app = express();
const port = 2560;
app.use(express.json());

app.post("/api/v1/sighup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password
    try{   
        const zodVerification = await zod.object({
            username : zod.string().min(5),
            password : zod.string().min(5)
        })

        const parseData = zodVerification.safeParse(req.body);
        if(parseData.success){
            const hashPassword = await bcrypt.hash(password , 8);
            const createData = await userModel.create({
                username : username,
                password : hashPassword
            })
            //createData.save();
            res.json({
                success : "true",
                data : createData
            }) 
        }else{
            res.json({
                message : "failes",
                reason : parseData.error,
            })
        }
          
    }catch(e){
        res.json({
            reason : e,
            success : "false"
        })   
    }
})

app.post("/api/v1/sighin",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password
    
    try{   
        const isusernameMatch = await userModel.findOne({username : username});
        if(!isusernameMatch){
            res.json({
                success : "false",
                reason : "unautho user"
            })
            return;
        }
        const matchPassword = await bcrypt.compare(password ,isusernameMatch.password as string);
        if(matchPassword){
            const token = await jwt.sign({
                id : isusernameMatch._id
            }, jwt_screats)
            
            res.json({
                token:token,
                success : "true",
                msg : "authorized user",
               
            }) 
        }else{
            res.json({
                success : "false",
                msg : "unauthorized user"
            }) 
        }         
    }catch(e){
        res.json({
            reason : e,
            success : "false"
        })   
    }
})

app.post("/api/v1/content",userMiddleware,async (req,res)=>{
    const link = req.body.link
    const type = req.body.type
    const contactCreate = await contentModel.create({
        link : link,
        type : type,
        tags : [],
        //@ts-ignore
        userId : req.id
    })

    res.json({
        message : "content added"
    })
})

app.get("/api/v1/content",userMiddleware,async (req,res)=>{
    const UserContent =  await contentModel.find({
        //@ts-ignore
        userId : req.id
    }).populate('userId' , 'username');
    //@ts-ignore
    //const userDetails = await userModel.find({_id:req.id});
    res.json({
        userContent : UserContent,
        // userDetails : userDetails.values(username)
    })
})

app.delete("/api/v1/content",userMiddleware,async (req,res)=>{
    const contentId = req.body.contentId
    await contentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId : req.id
    })
    res.json({
        message : "content deleted"
    })
})

// app.post("/api/v1/brain/:sharelink",(req,res)=>{
    
// })

function connectDB(){
    // mongoose.connect("mongodb+srv://shashankismylife08:g9ymekSSe4H5Xmq1@cluster0.f3kq8.mongodb.net/brain-app")
    mongoose.connect(local_url);
}

connectDB();
app.listen(port);