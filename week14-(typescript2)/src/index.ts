//this is the complex object with type shashank
interface shashank{
    age : number,
    gender : string,
    user? :{        //? this make is optional 
        name : string,
        city : string,
        phone : number
    }
}

const User1 : shashank = {
    age : 22,
    gender : "male",
    user :{
        name : "mohan",
        city :"gwalior" ,
        phone : 626908
    }
}

const User2 : shashank = {
    age : 22,
    gender : "male",
    //user :undefined
}

function working(x : shashank = User2){
    console.log(x.user?.name);  
}

//setTimeout(working , 3000)

// function sum(a : number , b: number) : number {
//     return a + b
// }

// console.log(sum(2,3));



interface people{
    name : string,
    age : number,
    //greet: ()=> string,   //function
   // greet2():string     //function 
}

class person implements people{
    name :string;
    age : number;

    constructor(name: string , age : number ){
        this.name = name;
        this.age = age
    }
}

let user = new person("shashank" , 22);


let person1 : people={
    name : "shashank",
    age : 22,
    // greet : ()=>{
    //     return "hey there" + person1.name
    // }
}

//console.log(person1.greet());


///

interface human{            //interface is created
    name : string,
    age : number,
    isLegal() : boolean
}

// function random(user : human){
//     user.age = 33
// }

const employee : human ={   //first emp
    name : "shashank",
    age : 22,
    isLegal : ()=>{
        return 22>4;
    }
}

const employee2 : human ={      //second emp
    name : "kunal",
    age : 24,
    isLegal : ()=>{
        return 24<4;
    }
}

///or by class
class employee3 implements human{
    name : string
    age : number
    isLegal:()=> boolean 
    constructor(name : string , age : number){
        this.name = name;
        this.age = age
        this.isLegal = ()=>{
            return true
        }
    }
}

let human1 = new employee3("shahsank" , 252);       //object of the class
console.log(human1.isLegal());
console.log(human1.age);

