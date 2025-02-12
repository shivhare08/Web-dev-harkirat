const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());
const mongoose = require('mongoose');
// const userController = require('./routes/userController.js')
const adminController = require('./routes/adminController')
const courseController = require('./routes/courseController')
const purchaseController = require('./routes/purchaseController')



//app
// app.use("/users",userController)

//database connection
async function connectdb(){
    await mongoose.connect('mongodb+srv://shivhares2002:mww8frbY4dnHF92a@cluster0.gq0hu.mongodb.net/courseera-App');
}

connectdb();
// app.use("/admin",adminController)
app.use("/courses",courseController)
// app.use("/purchases",purchaseController)

// function middle(req,res,next){
//     const name = req.body.name;
//     if(name == "shashank"){
//         res.json({
//             msg : "a authentication person"
//         })
//         next()
//     }else{
//         res.json({
//             msg : "not authentication person"
//         })
//     }
// }
// app.use(express.json());


// app.use(middle)
// app.use("/",(req,res)=>{
//     const name = req.body.name;
//     const surname = req.body.surname
//     // res.send("horhn")
//     // console.log("hey");
//     res.json({
//         msg : "done",
//         name : name,
//         surname : surname
//     })
// })

// app.get("/me/second/:anything",(req,res)=>{
//     const any = req.param.anything;
//     //res.send("hey");
//     res.json({
//         msg : "done",
//         anythg : any
//     })
// })

// app.use("/third",(req,res)=>{
//     const name = req.body.name;
//     const surname = req.body.surname
//     // res.send("horhn")
//     // console.log("hey");
//     res.json({
//         msg : "done",
//         name : name,
//         surname : surname
//     })
// })

app.listen(port)

// app.listen(port,()=>{
//     console.log(`listen in port number ${port}`);
// })
