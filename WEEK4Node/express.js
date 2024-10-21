const express = require('express')
const app = express();  //like hospital
const port = 3000;

app.use(express.json());
const user = [{
    name:"shashank",
    kidney:[{
        healthy : false
    }]
}]

function MIDDLEWARE(req,res,next){
    if(user.length.length == 2){
        res.json({
            msg:"sorry bro"
        })
        next();
    }
}


app.use(MIDDLEWARE)

app.get("/",function(req,res){          //he is asking about num of kidney and health status
    const kedney = user[0].kidney;
    const numofkedney = kedney.length;
    var numofhealthkedneys = 0;
    for(let i=0;i<kedney.length;i++){
        if(kedney[i].healthy){
            numofhealthkedneys = numofhealthkedneys+1;
        }
    }
    const unhealth = numofkedney - numofhealthkedneys;
    res.json({
        numofhealthkedneys,
        numofkedney,
        unhealth
    })
})


app.post("/",function(req,res){
    const isHealty = req.body.isHealty;
    user[0].kidney.push({
        healthy:isHealty
    })
    res.json({
        msg:"done"
    })

})


app.put("/",function(req,res){
    for(let i=0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = true;
    }
    res.json({
        status:"all are updated"
    })
})

app.delete("/",function(req,res){
    const kedney = user[0].kidney;
    const newkedney = [];
    for(let i=0;i<kedney.length;i++){
        if(kedney[i].healthy){
            newkedney.push({
                healthy:true
            })
        }
    }

    user[0].kidney = newkedney;
    res.json({})
})



// function calculates(n){
//     let ans = 0;
//     for(let i=0;i<n;i++){
//         ans++;
//     }
//     return ans+20;
// }
// app.get("/",()=>{
//     console.log("hlo word");  
// })


// app.get("/",function(req,res){

// })

// app.get("/",(req,res)=>{
//     res.send("mddc")
// })


// app.get('/',function(req,res){
//     const n = req.query.n;
//     const ans = calculates(n);
//     res.send(ans.toString())
// })


app.listen(port);       //like doctor

