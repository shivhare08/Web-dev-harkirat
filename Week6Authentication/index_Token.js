const express = require('express');
const app = express()
const port = 3000

app.use(express.json());    //it is a middleware
// function signinHandler(req,res){}


//========GLOBLE EMPTY ARRAY FOR STORING THE USERS DATA
let user = [];


//========Function to create a unique 32 digits value AS token for sending after true authentication=======================
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
        '3', '4', '5', '6', '7', '8', '9']

    let TOKEN = "";
    for (let i = 0; i < 32; i++) {
        TOKEN = TOKEN + options[Math.floor(Math.random()* options.length)]
    }
    return TOKEN

}

let count = 0;
//==========This function for signup the user or creating an account===========================
app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password

    user.push({
        username: username,
        password: password
    })
    count++;
    res.json({
        count,
        message: "registration successfully",
    })
})


//====================LOGIN (checking valid user)======================//
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const users = user.find(function (u) {
        if (u.username == username && u.password == password) {
            return true;
        } else {
            return false;
        }
    })

    if (users) {
        const token = generateToken();
        user.token = token;     //we create a new feild in obj as token (username , password +++++++ token)
        res.send({
            token
        })
    }else{
        res.status(403).send({
            message : "Invalid username or password"
        })
    }
})


//========================Individuality==================================//
app.get("/me",function(req,res){
    const token = req.header.token           //here the specific token is sent from postman to validate the user
    // let foundUser = null;

    let foundUser = user.find(n=>{
        if(n.token == token){
            res.send(n)
        }else{
            res.json({
                message : "not found"
            })
        }
    })
})


//========Localhost port for running on browser==============//
app.listen(port)