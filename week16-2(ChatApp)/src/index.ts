import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 4560 })


//brute force approch

//==========================================================================================

// let totalUser = 0;
// let totalSocket: WebSocket[] = [];

//connection bna to socket aaya
// wss.on("connection", (socket) => {
//     totalUser += 1;
//     // socket.send(totalUser);
//     // console.log(socket);

//     // socket.on("message",(msg)=>{
//     //     socket.send(msg.toString());``
//     // })

//     totalSocket.push(socket);
//     socket.on("message", (msg) => {

//         totalSocket.forEach(x => {
//             x.send(msg.toString())
//         })
//         //=========or
//         // for(let i=0;i<totalSocket.length;i++){
//         //     const s = totalSocket[i];   //yha pr sb socket honge kuki array me bhi socket hi add h
//         //     s.send(msg.toString())
//         // }
//     })


//     //jese hi user disconnect ho to 
//     socket.on("disconnect",()=>{
//         totalSocket = totalSocket.filter(x => x != socket)
//     })
// })

//==========================================================================================



//schmea of joining room
// {
//     "type" : "join",
//     "payload" : {
//         "roomId" : "123"
//     }
// }

//schema of sending msg
// {
//     "type" : "chat",
//     "payload" : {
//         "message" : "hi there"
//     }
// }


//optimal approch

interface User{
    socket : WebSocket;
    room : string,
}

let allUsers : User[] = [];

wss.on("connection",(socket)=>{ 
    //msg ek string ke rup me aarhi then first we will convert it into obj
    socket.on("message",(msg)=>{    
        const parsedMsg = JSON.parse(msg as unknown as string);
        if(parsedMsg.type == "join"){
            allUsers.push({
                socket,
                room : parsedMsg.payload.roomId
            })
        }

        if(parsedMsg.type == "chat"){
            //now current user Ki id dekhinge
            const currentUserRoom = allUsers.find((x) => x.socket == socket)?.room
            
            for(let i=0;i<allUsers.length;i++){
                if(allUsers[i].room == currentUserRoom){
                    allUsers[i].socket.send(parsedMsg.payload.message);
                }
            }

            // allUsers.find((x)=>{
            //     let SameroomIdUsers = allUsers.find((x)=> x.room == currentUserRoom);
            //     SameroomIdUsers?.socket.send(parsedMsg.payload.message)
            // })
            
        }
    })
})