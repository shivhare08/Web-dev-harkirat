
// function main(){
//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")            //fetch function is returns a promise ,fetch output assign in result
//     .then(async result=>{
//         const json = await result.json();
//         console.log(json)
//     })    
// }


// async function main(){
//     const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     const json = await result.json()
//     console.log(json);
    
// }

// async function postWala(){
//     const data = await fetch("https://fake-json-api.mock.beeceptor.com/users",{
//         method : "POST"
//     });
//     const result = await data.text() 
//     console.log(result);
    
// }

// postWala();
// main();










//=========================================================================================================================================
//     AXIOS (axios is external library that is easy to use and it is popular)
//Axios already knows the data will be fetch with JSON then we dont have to write .json()
//=========================================================================================================================================



const axios = require("axios")
async function axi(){
    const data = await axios.post("https://fake-json-api.mock.beeceptor.com/users");
    console.log(data);
}

axi();