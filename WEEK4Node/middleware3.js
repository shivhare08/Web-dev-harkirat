const express = require('express');
//const { json } = require('stream/consumers');
const app = express();
const port = 1000;
app.use(express.json())

app.get("/",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const c = parseInt(a) + parseInt(b);
    res.json({
        c, 
        message :"done"
    })
})

app.post("/home",function(req,res){
    const things = req.body.a;
    const thing1 = req.body.b;
    // res.send("successfully")
    res.json({
        things,
        thing1
    })
})


app.listen(port)