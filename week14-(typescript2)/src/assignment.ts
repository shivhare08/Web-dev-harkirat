interface admin{
    name:string,
    age:number,
    middleName ? :string
    address:{
        city:string,
        pin:number
    }
}

const admin1 : admin = {
    name:"shahsnak",
    age:22,
    middleName :"shivhare",
    address:{
        city:"gwalior",
        pin:474012
    }
}

const admin2 : admin = {
    name:"kunal",
    age:22,
    address:{
        city:"gwalior",
        pin:474012
    }
}

function action(admins : admin = admin1) : string{
    return "welcome " + admins.name
}

console.log(action());
