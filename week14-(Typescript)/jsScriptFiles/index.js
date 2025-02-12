"use strict";
//let num :number = [3,4,2,4];
//let y = [2,43,4];
// let num : number[] = [3,4,3,2,2,4,5];
// console.log(num[2]);
for (let num = 5; num < 10; num++) {
    console.log(num);
}
console.log(1 + 2 + "3");
console.log("3" + 1 + 2);
let y = 45;
y = 55;
console.log(y);
//functions
function Name(firstName) {
    if (firstName) {
        console.log("it is correct");
    }
    else {
        console.log("wrong details");
    }
}
Name(2 > 4);
// function Jobs(fn : any){
//     setTimeout(fn , 2000)
// }
function Jobs(fn) {
    setTimeout(fn, 2000);
}
Jobs(function () {
    console.log("hey");
});
//delayed function
function delayedFun(anotherFunction) {
    setTimeout(anotherFunction, 2000);
}
function log() {
    console.log("hey there");
    return 5;
}
delayedFun(log);
//polymorphism
function poly(anotherFn) {
    setTimeout(anotherFn, 2000);
}
poly(function () {
    console.log("hey therre");
    return "Shashank";
});
// poly(function(){
//     console.log("hey therre");
//     return 8
// })
// poly(function(){
//     console.log("hey therre");
//     return true
// })
