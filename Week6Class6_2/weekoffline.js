const jwt = require('jsonwebtoken')
// console.log(jwt);

// const JWT_SECRET = "shashank";
// const token = jwt.sign("hlo",JWT_SECRET);
// const verify = jwt.verify(token, JWT_SECRET);

// console.log(token);
// console.log(verify);

// // if(verify == token){
// //     console.log("great");
// // }else{
// //     console.log("sorry");
// // }

//decode , verify , generator

const value = {
    name : "shashank",
    accountNumber : 2020202020
}

const token = jwt.sign(value , "secret")
console.log(token);

const decode = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhc2hhbmsiLCJhY2NvdW50TnVtYmVyIjoyMDIwMjAyMDIwLCJpYXQiOjE3MjY5NDE4MDV9.oGOvdTShbXtV2ZrSmLGgu-K5smZYPm-lzve-n1Qb7lI")
console.log(decode);
