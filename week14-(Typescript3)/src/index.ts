interface User{
    id:number;
    name:string;
    phone : number
    email:string;
    createdAt:Date; 
}

//i will pick only some properties
type UserDisplay = Pick<User , 'name' | 'email'>

// const display : UserDisplay ={
//     name : "shahsnak",
//     email : "shivhares2002@gmail.com",
// }


//partial
type UserDisplayOptional = Partial<UserDisplay>;
const display1 =(user : UserDisplayOptional)=>{
    return user.name;
}

console.log(display1({name:"shahshank"}));  //here we dont need to give all values

//console.log(display1({name :"shashank",email : "shivhares@gmail.com"}))       //but here we have too