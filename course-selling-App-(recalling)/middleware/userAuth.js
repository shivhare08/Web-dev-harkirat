// const jwt = require('jsonwebtoken'); 
// const { jwt_secret_key } = require('../routes/userController');
// jwt_secret_key
// function userMiddleware(req,res,next){
//     try{
//         const token = req.headers.token;
//         const tokenVerify = jwt.verify(token , jwt_secret_key)

//         if(tokenVerify){
//             req.id = tokenVerify._id
//             next();
//         }else{
//             res.json({
//                 message : "token doesnt exists",
//             })
//         }
//     }catch(err){
//         res.json({
//             message : "something is error",
//             error : e,
//         })
//     }
    
// }

// module.exports = userMiddleware