"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("./database");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const port = 2560;
app.use(express_1.default.json());
app.post("/api/v1/sighup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const zodVerification = yield zod_1.default.object({
            username: zod_1.default.string().min(5),
            password: zod_1.default.string().min(5)
        });
        const parseData = zodVerification.safeParse(req.body);
        if (parseData.success) {
            const hashPassword = yield bcrypt_1.default.hash(password, 8);
            const createData = yield database_1.userModel.create({
                username: username,
                password: hashPassword
            });
            //createData.save();
            res.json({
                success: "true",
                data: createData
            });
        }
        else {
            res.json({
                message: "failes",
                reason: parseData.error,
            });
        }
    }
    catch (e) {
        res.json({
            reason: e,
            success: "false"
        });
    }
}));
app.post("/api/v1/sighin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const isusernameMatch = yield database_1.userModel.findOne({ username: username });
        if (!isusernameMatch) {
            res.json({
                success: "false",
                reason: "unautho user"
            });
            return;
        }
        const matchPassword = yield bcrypt_1.default.compare(password, isusernameMatch.password);
        if (matchPassword) {
            const token = yield jsonwebtoken_1.default.sign({
                id: isusernameMatch._id
            }, config_1.jwt_screats);
            res.json({
                token: token,
                success: "true",
                msg: "authorized user",
            });
        }
        else {
            res.json({
                success: "false",
                msg: "unauthorized user"
            });
        }
    }
    catch (e) {
        res.json({
            reason: e,
            success: "false"
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const type = req.body.type;
    const contactCreate = yield database_1.contentModel.create({
        link: link,
        type: type,
        tags: [],
        //@ts-ignore
        userId: req.id
    });
    res.json({
        message: "content added"
    });
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const UserContent = yield database_1.contentModel.find({
        //@ts-ignore
        userId: req.id
    }).populate('userId', 'username');
    //@ts-ignore
    //const userDetails = await userModel.find({_id:req.id});
    res.json({
        userContent: UserContent,
        // userDetails : userDetails.values(username)
    });
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield database_1.contentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.id
    });
    res.json({
        message: "content deleted"
    });
}));
// app.post("/api/v1/brain/:sharelink",(req,res)=>{
// })
function connectDB() {
    // mongoose.connect("mongodb+srv://shashankismylife08:g9ymekSSe4H5Xmq1@cluster0.f3kq8.mongodb.net/brain-app")
    mongoose_1.default.connect("mongodb+srv://shivhares2002:mww8frbY4dnHF92a@cluster0.gq0hu.mongodb.net/brain-app");
}
connectDB();
app.listen(port);
