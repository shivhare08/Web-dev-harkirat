// const crypto = require('crypto');

// let name = "rahul";
// let hash = crypto.createHash("sha256").update(name).digest('hex');
// console.log(hash);


// let input = 0;

// while(true){
//     let value = input.toString();
//     let hash = crypto.createHash("sha256").update(value).digest('hex');
//     if(hash.startsWith() == "0000"){
        
//     }
//     input++;
//     console.log(input);
// }

// const crypto = require("crypto");

// function FindHashwithprefix(value) {
//   let input = 0;
//   while (true) {
//     let inputstr =input.toString();
//     let hash = crypto.createHash("sha256").update(inputstr).digest("hex");
//     if (hash.startsWith == value) {
//       return { input: inputstr, hash: hash };
//     }
//     input++;
//   }
// }

// const result = FindHashwithprefix("0");
// console.log(`input = ${result.input}  hash = ${result.hash}`);



//SYNCRONOUS
// const content = fs.readFileSync('a.txt','utf-8');
// const content1 = fs.readFileSync('b.txt','utf-8');

//ASYNCRONOUS
// fs.readFile('a.txt','utf-8',function(err,content){
//     console.log(content)
// })
// fs.readFile('b.txt','utf-8',function(err,content){
//     console.log(content)
// })
// fs.readFile('a.txt','utf-8',function(err,content){
//     console.log(content)
// })

// fs.readFile('a.txt','utf-8',(err,Result)=>{
//     console.log(Result)
// })
// const content2 = fs.readFile('b.txt','utf-8')
// console.log(content2);


// function sum(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function division(a,b){
//     return a/b;
// }

// function AllinOne(a,b,operation){
//     return operation(a,b);
// }

// let x = AllinOne(52,2,multiply);
// console.log(x);

//---------------------------------

// function fun(err,data){
//     console.log(data);
// }

// fs.readFile('a.txt','utf-8',fun)
// fs.readFile('b.txt','utf-8',fun)

// -------------------------------------
// console.log("5555")
// function fun(){
//     console.log("dk")
// }
// setTimeout(fun)



//--------------------------------------------------------

// function read(err,data){
//     if(err){
//         console.log("file not found");
//     }else{
//         console.log(data);
//     }
// }

// fs.readFile('b.txt','utf-8',read);


//=====================================


// function read(err,data){
//     console.log("1")
// }
// console.log("2")

// setTimeout(read,5000);

// console.log("3")

// let c=0;
// for(let i=0;i<=4;i++){
//     c = c+i;
// }

// console.log("4")


// function fun() {
//     console.log("hlo")
// }

// setTimeout(fun(),5000)

 

