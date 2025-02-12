"use strict";
// const x : number[] = [3,5,2];
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "shashak",
    city: "gwalior",
    pin: 474012
};
//obj.city = "kunal"    //it will not re-write
console.log(obj);
const User1 = {
    "name": "shashak",
};
const Work = {
    emp1: {
        name: "Shashak",
        id: 56
    }
};
const values = {
    "name": 33,
};
//type PartialTHings = Partial<moreObjValues>;
//type ReadonlyTheObj = Readonly<moreObjValues>
const moreObjVal = {
    "one": {
        "name": "Shashank",
        "id": 474012
    }
};
