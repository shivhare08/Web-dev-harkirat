"use strict";
// let x : number[] = [3,2,4,2,5]
let AllUsers = [];
function filtersUser(user) {
    user.filter((x) => {
        if (x.age > 18) {
            AllUsers.push(x);
        }
    });
}
filtersUser([{
        name: "shashank",
        age: 22
    }, {
        name: "kunal",
        age: 92
    }]);
console.log(AllUsers);
