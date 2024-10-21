//1 Create a backend server in node js that returns the sum endpoints
//2 Write an html file, that hits the backend server using the fetch api

const express = require('express');
const app = express();
const cors = require('cors');
const port = 2000;

app.use(express.json());
app.use(cors());

app.post("/sum",function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer : a+b,
    })
})

app.listen(port);