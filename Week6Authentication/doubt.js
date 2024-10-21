const user = [{username : "shashank",password : 1234} , {username : "kunal" , password : 25490} ]


// const x = user.find(u => u.username)
// console.log(x);

// const y = user.find(p => {p.username === "shashank"})
// console.log(y);

const z = user.find(function(userdata){
    //console.log(userdata);
    
    if(userdata.password === 12534){
        return true
    }else{
        return false
    }
})

// console.log(z);

// const random = user.find(d=>d.us)

//============FLOOR AND CEIL FUNCTION ARE DIFFERERNT FROM EACH OTHER

// console.log(Math.floor(2.9));           //2
// console.log(Math.round(2.49));
// console.log(Math.ceil(2.9));



//==================GENERATION THE TOKEN========================//

// function generateToken(){
//     let options = ['a','b','c','d','e','f','g','h','i','0','1','2','3','4','5'];

//     let TOKEN = "";
//     for(let i=0;i<15;i++){
//         TOKEN = TOKEN + options[Math.floor(Math.random() * options.length )];
//     }
//     return TOKEN
    
// }

// console.log(generateToken());

//console.log(Math.floor(Math.random()*3));     //jis value se multliply kraun to result uss number se kam aayega , ex = 0.9 * 5 = 4.5
