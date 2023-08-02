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
exports.signin = exports.signup = void 0;
const model_user_1 = __importDefault(require("../../models/model.user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const emailExists = yield model_user_1.default.findOne({ email: email });
    if (emailExists) {
        return res.status(409).json({ error: "email already exists" });
    }
    try {
        const handledPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = new model_user_1.default({
            email,
            password: handledPassword
        });
        yield newUser.save();
        return res.status(200).json({ message: 'User created successfully.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
    res.json("saved");
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    const existUser = yield model_user_1.default.findOne({ email: email });
    if (!existUser) {
        return res.status(201).json({
            message: "email or password do not match",
            token: '',
            data: { email: "" }
        });
    }
    const match = yield bcrypt_1.default.compare(password, existUser.password);
    if (match) {
        const token = jsonwebtoken_1.default.sign({ _id: existUser._id }, 'aklass');
        return res.status(200).json({
            token: token,
            message: 'welcome',
            data: { email: existUser.email }
        });
    }
});
exports.signin = signin;
