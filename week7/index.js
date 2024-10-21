const express = require("express");
const z = require('zod');
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "shashankshivhare";
const mongoose = require("mongoose");
const app = express();
const port = 2000;

//yha se index file reach kr payegi to mongodb by in address se..
//n last me iss link ke database ka name likhna jruri h(todo-app-database)
mongoose.connect("mongodb+srv://shivhares2002:mww8frbY4dnHF92a@cluster0.gq0hu.mongodb.net/todo-app-database")
app.use(express.json())


// let user = [];


//===================================create operation
app.post("/signup", async (req, res) => {

    const requiredBody = z.object({
        email:z.string().min(3).email(),
        password : z.string().min(5).max(100),
        name:z.string().min(5).max(10)
    })

    const parseDaraWithSuccess = requiredBody.safeParse(req.body);
    
    if(!parseDaraWithSuccess.success){
        res.json({
            message : "incorrect format",
            error : parseDaraWithSuccess.error
        })
        return
    }

    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    
    // if(name && password && email){
    //     if(password.length >= 4){
    //         if(!email.contains("@")){
    //             res.json({
    //                 message:"please contain @ with email"
    //             })
    //             return
    //         }else{
    //             if(!email.isString()){
    //                 res.json({
    //                     message:"email is not correct"
    //                 })
    //                 return
    //             }else{
    //                 try {
    //                     const hashpassword = await bcrypt.hash(password, 5);
    //                     console.log(hashpassword);
                
    //                     await UserModel.create({
    //                         name: name,
    //                         password: hashpassword,
    //                         email: email
    //                     })
                
    //                     res.json({
    //                         message: "signup successfully"
    //                     })
    //                 }
    //                 catch (e) {
    //                     res.json({
    //                         //yha pr e me sab kch error ke liye show hojayega ki dikkt kha aarhi h
    //                         error: e,
    //                     })
    //                 }
    //             }
    //         }
    //     }else{
    //         res.json({
    //             message: "password is small"
    //         })
    //         return
    //     }
    // }else{
    //     res.json({
    //         message: "all fields are required"
    //     })
    //     return
    // }
    //async await isiliye kuki pehle document create hoga tbhi to aange ke steps honge
    //ni to signup success msg pehle aajayega bina document ke bane..
    try {
        const hashpassword = await bcrypt.hash(password, 5);
        console.log(hashpassword);

        await UserModel.create({
            name: name,
            password: hashpassword,
            email: email
        })

        res.json({
            message: "signup successfully"
        })
    }
    catch (e) {
        res.json({
            //yha pr e me sab kch error ke liye show hojayega ki dikkt kha aarhi h
            error: e,
        })
    }
})

// UserModel.insertOne({
//     name : name,
//     password:password,
//     email:email
// })
// user.push({
//     username:username,
//     phone:phone,
//     password:password
// })


//====================================read operation
app.post("/signin", async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;

    //yha pr user ke paas user ke saare documents sab kch h..n iss const user se me user ka kch
    //bhi dekh sakta like name , phone , (_id) , or jo kch bhi schema me define kiya h

    try {
        const user = await UserModel.findOne({
            email: email,
            // password : password
        })

        if (!user) {
            res.status(403).json({
                message: "user does not exist",
            })
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {

            //yha pr mene id name ke variable me user ki _id h vo store krli
            const token = jwt.sign({
                id: user._id,  //user ki jo _id h na vo jrur id me rkh lenaaaa.......fr apn isi id se pehchanenge only token ke sath kch kre to....
            }, JWT_SECRET);

            res.json({
                message: "congratulation",
                yourToken: token,
                userDetails: user
            })
        } else {
            res.status(403).json({
                message: "you are farzi"
            })
        }
    } catch (e) {
        res.json({
            e
        })
    }
})


//================middleware
function auth(req, res, next) {
    const token = req.headers.token;

    //yha pr uss user ki saari info aagyi h jese userId,email n all
    const decodedData = jwt.verify(token, JWT_SECRET);
    console.log(decodedData);
    if (decodedData) {
        // yha pr jo id h vo mene as a variable use ki thi sab sign kr rha tha//dekh line number(75)
        req.userId = decodedData.id     //jo bhi user ki id h vo mene req.userId se bhjdi h /todo ya or bhi authenticated API
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        //yha pr jo bhi me upr se lekr aaya vo bna dia
        userId,
        title,
        done
    })
    res.json({
        userId: userId,
        message: "todo is created"
    })
})

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    //yha pr iss todos me saare todos nikl jayege uss particular id se
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
})



app.listen(port);