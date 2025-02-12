// const express = require('express');
// const userRouter = express.Router()
// const zod = require('zod')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// export const jwt_secret_key = "shashankshivhare"
// const userMiddleware = require('../middleware/userAuth.js')
// const userModel = require('../database/mongoDatabase.js')

// userRouter.post("/registration", async(req,res)=>{
//     try{

//         const name = req.body.name;
//         const password = req.body.password;
//         const email = req.body.email;
        
//         const zodAuthentication = zod.object({
//             name : zod.string().min(2),
//             email : zod.string().min(5),
//             password : zod.string().min(4)
//         })

//         //yha pr parseData will say success status in boolean
//         const parseData = zodAuthentication.safeParse(req.body)
//         if(!parseData.success){
//             res.json({
//                 msg : "Sorry",
//                 reason : parseData.error
//             })
//             return;
//         }

//         const hashPassword = await bcrypt.hash(password , 10);
        
//         const createData = await userModel.create({
//             name : name,
//             password : hashPassword,
//             email : email
//         })
//         res.json({
//             msg : "registration successfully",
//             data : createData
//         })

//         // console.log(parseData);
        
        
//     }catch(err){
//         res.json({
//             message: "catch error",
//             error: err,
//         })
//     }
// })

// userRouter.post("/login",async (req,res)=>{
//     try{
//         const email = req.body.email
//         const password = req.body.password

//         //all the details are existeed in isemail section
//         const isemail = await userModel.findOne({
//             email : email
//         })

//         if(!isemail){
//             res.json({
//                 msg : "email is not registered",
//             })
//             return;
//         }

//         const passwordCompare = await bcrypt.compare(password , isemail.password);
//         if(passwordCompare){
//             const token = await jwt.sign({
//                 _id : isemail._id
//             },jwt_secret_key)
            
//             res.json({
//                 message: "congratulation",
//                 yourToken: token,
//                 userDetails: isemail
//             })
//         }else{
//             res.status(403).json({
//                 message: "invalid user"
//             })
//         }
//     }catch(e){
//         res.json({
//             msg : "something went wrong",
//             error : e
//         })
//     }
// })

// userRouter.get("/userPurchases",userMiddleware ,async (req,res)=>{
//     const userId = req.id;
    
// })

// userRouter.get("/allcourses")

// userRouter.get("/logout")

// module.exports = userRouter 