"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let obj = {
    name: "shashank",
    age: 22
};
//console.log(obj.name);
function Greet(users) {
    console.log(users.age);
}
Greet({
    name: "Shashank",
    age: 22,
    address: "Scindia nager",
    eligible: true
});
//initialization
const details = {
    name: "shahsank",
    age: 22,
    email: "shivhares2002@gmail.com",
    address: "sp aashram"
};
function UserDetails(users) {
    console.log(users.age);
}
const personalDetails = {
    name: "shashank",
    address: "sp aashram",
    age: 22
};
function isEligible(x = personalDetails) {
    if (x.age > 18) {
        console.log("eligible");
    }
    else {
        console.log("not eligible");
    }
}
function result(x, y) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setTimeout(isEligible, 2000);
        console.log(y);
    });
}
result(74, 56);
