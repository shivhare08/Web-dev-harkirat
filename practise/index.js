const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const zod = require('zod');
const JWT = require('jsonwebtoken')
const JWT_SECRET = "shahsankshivhare";
const { studentModel , courseModel } = require('./database');

app.use(express.json());

mongoose.connect("mongodb+srv://shivhares2002:mww8frbY4dnHF92a@cluster0.gq0hu.mongodb.net/student-registration")

app.post("/registration",async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const course = req.body.course;

        const zodUser = await zod.object({
            email: zod.string().email().min(4).max(20),
            password:zod.string().min(4).max(10),
            course : zod.string().max(5)
        })

        const dataParse = await zodUser.safeParse(req.body);

        if(!dataParse.success){
            res.json({
                your_error : dataParse.error
            })
            return
        }

        const hashpassword = await bcrypt.hash(password , 10);
        // console.log(hashpassword);
        
        const userData = await studentModel.create({
            email : email,
            password : hashpassword,
            course : course,
        })
    
        res.json({
            message : "done",
            yourdata : userData
        })

    }catch(e){
        res.json({
            yourerror : e
        })
    }

})

app.post("/login",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    try{
        const userVerification = await studentModel.findOne({
            email : email,
            // password : password
        }) 

        if(!userVerification){
            res.json({
                error:"you are not exist"
            })
            return
        }

        const isMatch = await bcrypt.compare(password,userVerification.password);

        if(isMatch){
            //dekho yha pr mene token 3 chiz se banaya h
            //1= id ,2= secret key, 3= course
            //isi vjha se srf me 3 hi chiz bhj skta middleware se sirf...esaaaa hota h
            const token = JWT.sign({
                id:userVerification._id,
                course:userVerification.course
            },JWT_SECRET);
    
            res.json({
                success : "you are logged in",
                your_token : token,
                your_course : userVerification.course
            })
        }

    }catch(e){
        res.json({
            error : e
        })
    }
})

const middleware = (req,res,next)=>{
    const token = req.headers.token;
    const tokenVerify = JWT.verify(token , JWT_SECRET);
    console.log(tokenVerify);
    
    if(tokenVerify){
        req.studentId = tokenVerify.id;
        req.studentCourse = tokenVerify.course;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
    
}

app.post("/courses",(req,res)=>{
    
})

app.get("/course",middleware,async (req,res)=>{
    const studentId = req.studentId;
    const studentcourse = req.studentCourse
    
    res.json({
        student_Id : studentId,
        studentcourse : studentcourse
    })
    
})





app.listen(2000);


