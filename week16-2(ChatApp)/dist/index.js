"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 4560 });
let allUsers = [];
wss.on("connection", (socket) => {
    //msg ek string ke rup me aarhi then first we will convert it into obj
    socket.on("message", (msg) => {
        var _a;
        const parsedMsg = JSON.parse(msg);
        if (parsedMsg.type == "join") {
            allUsers.push({
                socket,
                room: parsedMsg.payload.roomId
            });
        }
        if (parsedMsg.type == "chat") {
            //now current user Ki id dekhinge
            const currentUserRoom = (_a = allUsers.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].room == currentUserRoom) {
                    allUsers[i].socket.send(parsedMsg.payload.message);
                }
            }
            // allUsers.find((x)=>{
            //     let SameroomIdUsers = allUsers.find((x)=> x.room == currentUserRoom);
            //     SameroomIdUsers?.socket.send(parsedMsg.payload.message)
            // })
        }
    });
});
