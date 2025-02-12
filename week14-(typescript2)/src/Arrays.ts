// let x : number[] = [3,2,4,2,5]

// x.map(y =>{
//     if(y%2==0){
//         console.log(y);
//     }
// })

// let z : number[] = [...x , 45 ,22]
// console.log(z);

interface user{
    name:string;
    age: number;
}

let AllUsers : user[] = []

function filtersUser(user : user[]){
    user.filter((x) => {
        if(x.age > 18){
            AllUsers.push(x)
        }
    })
}

filtersUser([{
    name : "shashank",
    age : 22,
} ,{
    name : "kunal",
    age : 92
}])



console.log(AllUsers);