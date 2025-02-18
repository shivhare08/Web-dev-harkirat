import express from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { userModel  , contentModel, linkModel} from "./database";
import { jwt_screats } from "./config";
import { userMiddleware } from "./middleware";
import zod from 'zod';
import bcrypt from 'bcrypt';
import { local_url } from "./config";
import { random_Link_Generator_Function } from "./util";

declare global{
    namespace Express{
        export interface Request{
            id?:String
        }
    }
}

function connectDB(){
    // mongoose.connect("mongodb+srv://shashankismylife08:g9ymekSSe4H5Xmq1@cluster0.f3kq8.mongodb.net/brain-app")
    mongoose.connect(local_url);
}

connectDB();

const app = express();
const port = 2560;
app.use(express.json());

app.post("/api/v1/signup",async (req,res)=>{
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

app.post("/api/v1/signin",async (req,res)=>{
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
    const title = req.body.title
    const contactCreate = await contentModel.create({
        link : link,
        title : title,
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

app.post("/api/v1/share/brain",userMiddleware,async (req,res)=>{
    const userId = req.id
    const existingLink = await linkModel.findOne({
        userId : userId
    })

    if(existingLink){
        res.json({
            message : "the link is already exist",
            hash : existingLink.hash
        })
        return
    }

    const hash = random_Link_Generator_Function(12);
    await linkModel.create({
        hash : hash,
        userId : req.id
    })
    res.json({
        link:hash,
    })
})

app.get("/api/v1/share/brain/:sharelink",async (req,res)=>{
    const hash = req.params.sharelink;
    const share = req.body.share;

    if(share){
        const findingKey = await linkModel.findOne({
            hash : hash
        })

        if(!findingKey){
            res.json({
                message : "wrong link"
            })
            return;
        }
        const userId = findingKey.userId;

        const userdata = await userModel.findOne({
            _id : userId
        })

        const userContent = await contentModel.findOne({
            userId : userId
        })

        if(!userContent){
            res.json({
                message : "content is not found"
            })
            return;
        }
        res.json({
            message : "user content",
            content : {
                username : userdata?.username,
                title : userContent.title,
                link : userContent.link
            }
        })

    }
})

app.listen(port);