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
const config_2 = require("./config");
const util_1 = require("./util");
function connectDB() {
    // mongoose.connect("mongodb+srv://shashankismylife08:g9ymekSSe4H5Xmq1@cluster0.f3kq8.mongodb.net/brain-app")
    mongoose_1.default.connect(config_2.local_url);
}
connectDB();
const app = (0, express_1.default)();
const port = 2560;
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const title = req.body.title;
    const contactCreate = yield database_1.contentModel.create({
        link: link,
        title: title,
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
app.post("/api/v1/share/brain", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.id;
    const existingLink = yield database_1.linkModel.findOne({
        userId: userId
    });
    if (existingLink) {
        res.json({
            message: "the link is already exist",
            hash: existingLink.hash
        });
        return;
    }
    const hash = (0, util_1.random_Link_Generator_Function)(12);
    yield database_1.linkModel.create({
        hash: hash,
        userId: req.id
    });
    res.json({
        link: hash,
    });
}));
app.get("/api/v1/share/brain/:sharelink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.sharelink;
    const share = req.body.share;
    if (share) {
        const findingKey = yield database_1.linkModel.findOne({
            hash: hash
        });
        if (!findingKey) {
            res.json({
                message: "wrong link"
            });
            return;
        }
        const userId = findingKey.userId;
        const userdata = yield database_1.userModel.findOne({
            _id: userId
        });
        const userContent = yield database_1.contentModel.findOne({
            userId: userId
        });
        if (!userContent) {
            res.json({
                message: "content is not found"
            });
            return;
        }
        res.json({
            message: "user content",
            content: {
                username: userdata === null || userdata === void 0 ? void 0 : userdata.username,
                title: userContent.title,
                link: userContent.link
            }
        });
    }
}));
app.listen(port);
