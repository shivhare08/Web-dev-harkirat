function setTimeoutPromisifies(duration){
    // return new Promise(function(resolve){
    //     setTimeout(resolve,duration);
    // })
    return new Promise((resolve)=>{
        setTimeout(resolve,duration)
    })
}


setTimeoutPromisifies(1000).then(function(){
    console.log("hi 1 sec");
    setTimeoutPromisifies(3000).then(function(){
        console.log("hlo 3 second");
        setTimeoutPromisifies(5000).then(function(){
            console.log("shashank 5 second");
        })
    })
});

let a = [4,3,6,2,7];
const b = a.sort();
console.log(b);


// setTimeout(function(){
//     console.log("hlo this is 1 second");
//     setTimeout(function(){
//         console.log("after 3 second");
//         setTimeout(function(){
//             console.log("after 5 second");
//         },5000)
//     },3000)
// },1000)

// function threesec(){
//     console.log("3 second");
// }

// setTimeout(function(){
//     console.log("mohan");
//     setTimeout(threesec,3000);
//     setTimeout(function(){
//         console.log("5 second");
//     },5000)
// },1000)

// function resolve(res){
//     setTimeout(oneSec,1000);

// }

// function Promisfied(){
//     return new Promise(resolve);
// }

// const x = Promisfied();

// function callback(){
//     console.log("hi after 1 sec");
// }
// x.then(callback);