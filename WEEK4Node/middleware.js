const express = require("express");
const app = express();

let requestCount = 0;

function isOldAgeMiddleware(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
        
    }else{
        res.json({
            msg: "sorry you are not of age yet"
        })
    }
}

// function conditions(req,res,next){
//     const age = req.query.age;
//     const free = req.query.free;
//     if(age >= 18){
//         if(free == "true"){
//             next
//         }else{
//             res.json({
//                 msg : "sorry you are not eligible",
//             })
//         }
//     }else{
//         res.json({
//             msg : "your age is not 18+",
//         })
//     }
// }

//function for free
// function isFreeMiddleware(req,res,next){
//     const tellme = req.query.tellme;
//     if(tellme == "true"){
//         next();
//     }else{
//         res.json({
//             msg: "This is not a free coupen"
//          })
//     }
// }

app.use(isOldAgeMiddleware)

app.use(function(req,res,next){
    requestCount++;
    next();
})



//========Tell me your age===============//
app.get("/ride1",function(req,res){
    res.json({
        msg : "Ride1 is successfull",
        num : requestCount
    })
    
})

//=========Ticket free====================//
app.get("/ride2",function(req,res){
    res.json({
        msg : "Ride2 is successfull",
        num : requestCount
    })
})



//=====REAL MIDDLEWARE==================================//



app.listen(2000);