// const express = require('express')
// const app = express();
const cors = require('cors')
app.use(cors())

async function getRecentPost(){
    const response = await fetch("https://www.google.com/")
    const format = await response.json()
    console.log(format);
    
}

getRecentPost();
