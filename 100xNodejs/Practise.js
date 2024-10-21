//Explain Callback function and example

// function Sum(a,b) {
//     return a+b;
// }

// console.log(Sum(5,8));
// // Sum(5,8)

// let a = new Promise(Sum);

// function callback(){
//     console.log("hlo im a callback function");
// }
// a.then(callback);

// // setTimeout(Sum,2000)


// function Practise(value , callback){
//     console.log(`my value ${value} and sum = ${callback}`  );
// }
// let y = function callb(){
//     let x = 5 + 2;
//     console.log(x);
// }

// Practise(52,y);

//=========================Practising of Promise
//Dependency occur due to time

const data = [
    {name:"shashank",work:"college"},
    {name:"Kunal",work:"Placed"},
    {name:"Dhruv",work:"School"}
]

function getData(){
    setTimeout(()=>{
        data.forEach((dataa , indexx)=>{
            console.log(dataa);
        })
    },3000);
}

// function addData(newdata){
//     setTimeout(()=>{
//         data.push(newdata);
//     },2000)
// }

// addData({name:"Santosh",work:"School"})

// getData();

//promise

function createDate(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push(newData)
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("something not right");
            }
        },2000)
    })
}

//========Then and catch

// createDate({name:"Santosh",work:"School"})
// .then(getData)
// .catch(err => console.log(err))

// Async Await

async function start(){
    await createDate({name:"mohan",work:"dihadi"});
    getData();
}

start()