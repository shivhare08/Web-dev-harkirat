// const x : number[] = [3,5,2];

import { EmitFlags } from "typescript";

// x[2] = 854
// console.log(x);

type UserDetails ={
    name:string;
    city:string;
    pin:number
}

const obj : Readonly <UserDetails> ={
    name:"shashak",
    city:"gwalior",
    pin:474012
}

//obj.city = "kunal"    //it will not re-write

console.log(obj);


///OBJECTS TYPE

type Users = {
    [key : string] : string | number
}

const User1 : Users = {
    "name" : "shashak",
}

////or

interface Employee{
    name : string;
    id : number;
}

type Employee1 = {
    [key : string] : Employee          //the key will return both name as well as id
}

const Work : Employee1 = {
    emp1 :{
        name : "Shashak",
        id : 56
    }
}



type Works = Record<string , number>;
const values : Works = {
    "name" : 33,
}


type moreObjValues = Record<string , {name ?: string , id ?: number}>
//type PartialTHings = Partial<moreObjValues>;

//type ReadonlyTheObj = Readonly<moreObjValues>
const moreObjVal : moreObjValues = {
    "one" : {
        "name" : "Shashank",
        "id" : 474012
    }
}
