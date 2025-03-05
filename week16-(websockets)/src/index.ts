import{ WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8800})
//like
// const express from "express";

////event handler

//wss like server level
//socket like socket level
wss.on("connection",function(socket){
    //=======================================learning
    // socket.send("hello hey ");
    // setInterval(()=>{
    //     socket.send(`current price of bitcoin is ${Math.random() * 20}`);
    // },2000)

    // socket.on("message",(e)=>{
    //     console.log(e.toString());
    // })

    //=======================================echo application
    // socket.on("message",(e)=>{
    //     socket.send("loading..")
    //     setTimeout(()=>{
    //         socket.send(e.toString());
    //     },500)
       
    // })

    //=======================================ping pong application
    socket.on("message",(msg)=>{
        if(msg.toString() === "ping"){
            socket.send("pong")
        }
        else if(msg.toString() === "pong"){
            socket.send("ping")
        }
        else{
            socket.send("ping is not exist")
        }
    })
})

//like
// app.post("/conntectiion",(req,res)=>{
//     body
// })