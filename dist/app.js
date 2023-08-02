"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const router_user_1 = __importDefault(require("./routers/users/router.user"));
exports.app = (0, express_1.default)();
//config
exports.app.set("PORT_WEB", process.env.PORT || 3000);
//middleware
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use((0, cors_1.default)());
//routes
exports.app.use('/api/user', router_user_1.default);
