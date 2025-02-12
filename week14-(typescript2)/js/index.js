"use strict";
const User1 = {
    age: 22,
    gender: "male",
    user: {
        name: "mohan",
        city: "gwalior",
        phone: 626908
    }
};
const User2 = {
    age: 22,
    gender: "male",
    //user :undefined
};
function working(x = User2) {
    var _a;
    console.log((_a = x.user) === null || _a === void 0 ? void 0 : _a.name);
}
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user = new person("shashank", 22);
let person1 = {
    name: "shashank",
    age: 22,
    // greet : ()=>{
    //     return "hey there" + person1.name
    // }
};
// function random(user : human){
//     user.age = 33
// }
const employee = {
    name: "shashank",
    age: 22,
    isLegal: () => {
        return 22 > 4;
    }
};
const employee2 = {
    name: "kunal",
    age: 24,
    isLegal: () => {
        return 24 < 4;
    }
};
///or by class
class employee3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isLegal = () => {
            return true;
        };
    }
}
let human1 = new employee3("shahsank", 252); //object of the class
console.log(human1.isLegal());
console.log(human1.age);
