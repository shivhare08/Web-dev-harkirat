"use strict";
const admin1 = {
    name: "shahsnak",
    age: 22,
    middleName: "shivhare",
    address: {
        city: "gwalior",
        pin: 474012
    }
};
const admin2 = {
    name: "kunal",
    age: 22,
    address: {
        city: "gwalior",
        pin: 474012
    }
};
function action(admins = admin1) {
    return "welcome " + admins.name;
}
console.log(action());
