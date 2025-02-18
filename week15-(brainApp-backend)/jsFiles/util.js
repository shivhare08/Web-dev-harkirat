"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random_Link_Generator_Function = void 0;
const random_Link_Generator_Function = (len) => {
    let options = "abcdefghijklmnopqrstuvwxyz12345677890";
    let link = "";
    const length = options.length;
    for (let x = 0; x < len; x++) {
        link += options[Math.floor((Math.random() * length))];
    }
    return link;
};
exports.random_Link_Generator_Function = random_Link_Generator_Function;
