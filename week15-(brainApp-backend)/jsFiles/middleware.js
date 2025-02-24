"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const userMiddleware = (req, res, next) => {
    //const token = req.headers.token
    const token = req.headers["authorization"];
    //const token = req.headers.["Authorization"];
    const userVerification = jsonwebtoken_1.default.verify(token, config_1.jwt_screats);
    if (userVerification) {
        //@ts-ignore no need
        // req.id = userVerification.id;
        req.id = userVerification.id;
        next();
    }
    else {
        res.json({
            msg: "login first"
        });
    }
};
exports.userMiddleware = userMiddleware;
