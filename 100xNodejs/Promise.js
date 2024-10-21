// function hlo(age) {
//     console.log(`hlo my age is ${age}`)
// }
// console.log("hlo bhai 2");
// setTimeout(hlo, 1000, 22);

// console.log("hlo bhai 1");
// console.log("hlo bhai 3");
// console.log("hlo bhai 4");


// function loop() {

//     let a = 0;
//     while (a <= 9500000000) {
//         a = a + 1;
//         a++;
//     }
//     return a;
// }
// console.log(loop())


//=============================================

// ms = milisecond
// function setTimeoutPromisefied(ms){
//     let p =  new Promise(resolve =>setTimeout(resolve,ms));     //p has the Instance/Object of promise class bY 'new'
//     // return p
    // console.log(p);
// }
// setTimeoutPromisefied();
// console.log(setTimeoutPromisefied());
// let x = setTimeoutPromisefied();
// console.log(x);

// function callback(data){
//     console.log("hlo bha jhoje " + data)
// }
// setTimeoutPromisefied(3000).then(callback(22));

// setTimeoutPromisefied(5000).then(function call(){
//     console.log("Rohan")
// })

// function promiseCallback(resolve){
//     setTimeout(resolve,3000);
// }

// function main(){
//     console.log("hlo bhai");
// }
// promiseCallback(main);


//========================================
/* write a code
1. logs hi after 1sec
2. logs hello 3 seconds after step 1
3. logs hello there 5 seconds after ster 2 */

// function start(){
//     setTimeout(onesecond,1000);
// }

// function onesecond(){
//     console.log('hii its 1 sec');
//     setTimeout(threesecond,3000)
// }

// function threesecond(){
//     console.log('hello its 3 second');
//     setTimeout(Fivesecond,5000)
// }

// function Fivesecond(){
//     console.log('Hi there its 5 second');
// }

// start();


// setTimeout(function (){
//     console.log("hii");
//     setTimeout(function (){
//         console.log("hello");
//         setTimeout(function (){
//             console.log("hi there");
//         },5000)
//     },3000)
// },1000)


//==========Most important thing==========

// function waitfor3sec(resolve){
//     setTimeout(resolve,3000)
// }

// function  res(){
//     setTimeout(bhola,3000)
// }
// function setTimeoutPromisefied(){
//     return new Promise(function (final){
//         final();  //it will go to .then()
//     });
// }

// function main(){
//     console.log("hlo bhi im main");
// }

// function bhola(){
//     console.log("bhola");
// }

// setTimeoutPromisefied().then(bhola)      //promise basd approch


// setTimeout(main,5000)           //callback based approch
//=======================================================================
// function random(resolve){
//     // resolve();
// }

// let pro = new Promise(function (resolve){       //ye chal gya
//     resolve();                              
// });


// let pro = new Promise(random);    //ye nahichal gya;


// function callback(){
//     console.log('success');
// }
// pro.then(callback)


// let p = new Date();
// console.log(p);

// let m = new Map();
// let ans = m.set('name','juhd')
// // console.log(ans.get('name'));

// let d = Date();
// // console.log(p);

//===================================================================================

// const fs = require('fs');

// function readTheFile(resolve){
//     fs.readFile('a.txt','utf-8',function(err,content){
//         resolve(content);
//     })
// }
// function readFile(){
//      return new Promise(readTheFile); 
// }

// let p = readFile();

// function callback(content){
//     console.log(content);
// }
// p.then(callback)


//====================================================================================

// const fs = require('fs');
// const { resolve } = require('path/posix');
// const { setTimeout } = require('timers/promises');


// console.log("--------Top of the file---------");

// function readTheFile(resolve){
//     console.log('readTheFile is called');
//     setTimeout(function(){
//         console.log("callback based setTimeout called");
//         resolve();
//     },3000)
// }


// function setTimeoutPromisefied(filename){
//     console.log('setTimeoutPromisefied is called');
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisefied();

// function callback(){
//     console.log("timer is done");
// }

// p.then(callback);

// console.log("--------End of the file---------");


// return new promise(reaf);

// function reaf(xyz){
//     xyz();
// }


//========================================================

//=======WORKING OF PROMISE LIKE THAT
// class Promise2{
//     constructor(fn){
//         function afterdone(){
//             this.resolve();
//         }
//         fn(afterdone)
//     }

//     then(callback){
//         this.resolve = callback;
//     }
// }

// function setTimeoutPromisified(){
//     return new Promise2(resolve);       //it goes first to fn(afterdone)
// }


///==============================================

// function setTimeoutPromisefied(time){
//     return new Promise(function(resolve){
//         setTimeout(resolve,time);
//         resolve();
//     })
// }


// function setTimeoutPromisefied(time){
//     return new Promise((resolveFunction)=>{
//         setTimeout(resolveFunction,time)
//         resolveFunction();
//     })
// }

// function setTimeoutPromisefied(){
//     return new Promise(resolve =>setTimeout(resolve,3000));

// }


// const p = setTimeoutPromisefied(3000);

// function callback(){
//     console.log("this is callback funcuton");
// }
// p.then(callback);

function result(){
    console.log("hlo");
}

function h(){
    setTimeout(result,3000)
}

h();