//==========1st approch===============================================
const fs = require('fs');

function setTimeoutPromisified(duration){                    //Asyncronous function is make
    return new Promise(resolve => setTimeout(resolve,duration));
}

//=======================================================

//=========2nd Approch========================

// function resolve(res){
//     setTimeout(res,3000);
// }

// function setTimeoutPromisified(duration){
//     return new Promise(resolve);
// }

//==============================================

function readFileAsync(){                        //Asyncronous function is make
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                reject("File is not found");
            }else{
                resolve(data);
                console.log(data);
            }
        })
    })
}

// async function read(){
//     await readFileAsync(1000);
//     // console.log();
// }
readFileAsync()
    .then(function(done){
    console.log("done");
}).catch(function(err){
    console.log(err);
})

// read();
// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hii");
//     await setTimeoutPromisified(2000);
//     console.log("hello");
//     await setTimeoutPromisified(3000);
//     console.log("hi there");
// }

// solve();