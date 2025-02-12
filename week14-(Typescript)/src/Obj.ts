let obj = {
    name :"shashank",
    age : 22
}

//console.log(obj.name);

function Greet(users : {
    name : string,
    age : number,
    address : any,
    eligible : boolean
}){
    console.log(users.age);
}

Greet({
    name : "Shashank",
    age : 22,
    address : "Scindia nager",
    eligible : true
})

//Interface


//declarative
interface Geeks {
    name : string,
    age : number,
}

interface Geeks{
    email : string
}

interface Geeks2{
    address : string
}

//initialization
const details : Geeks & Geeks2={
    name : "shahsank",
    age : 22,
    email : "shivhares2002@gmail.com",
    address : "sp aashram"
}



function UserDetails(users : Geeks & Geeks2){
    console.log(users.age);
} 



interface personal  {
    name : string,
    address : string,
    age : number
}

const personalDetails : personal ={
    name :"shashank",
    address : "sp aashram",
    age : 22
}

function isEligible(x : personal = personalDetails){    //let val : number =44 (same thing)
    if(x.age > 18){
        console.log("eligible");
    }else{
        console.log("not eligible");
    }
}

// setTimeout(isEligible , 2000)




type stringORnumber = string | number;

function result(x : stringORnumber , y : stringORnumber){
    console.log(y);
}

result(74 ,56);