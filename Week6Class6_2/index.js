const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "shashank";
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

//localhost:2000
app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

//================================================================================================//

const data = [];
let count = 0;
app.post("/registration", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    data.push({
        username: username,
        password: password
    });

    count++;
    res.json({
        message: "registration successfully",
        count,
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const realUser = data.find(function (u) {
        if (u.username == username && u.password == password) {
            return true;
        } else {
            return false;
        }
    })

    if (realUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.send({
            token
        })
    }
    else {
        res.json({
            message: "you filled incorrect details"
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    const tokenverify = jwt.verify(token, JWT_SECRET);
    const username = tokenverify.username;

    if (username) {
        req.username = username;                //yha se req.username = username ne username as a req bhjdi to /me
        next();
    } else {
        res.json({
            message: "you are not supposed to verified user"
        })
    }
}

app.get("/me", auth, (req, res) => {            //yha pr req me username aagya auth middleware se
        data.find(n => {
        if (n.username == req.username) {          //yha pr implement horha
            res.send({
                username : n.username, 
                password : n.password
            })
        } else {
            res.json({
                message: "not found"
            })
        }
    })
})






// app.get("/me", (req, res) => {
//     const token = req.headers.token;
//     const isverify = JWT.verify(token, JWT_SECRET);
//     const username = isverify.username;

//     data.find(n => {
//         if (n.username == username) {
//             res.send(n);
//         } else {
//             res.json({
//                 message: "not found"
//             })
//         }
//     })
// })

app.listen(2000);