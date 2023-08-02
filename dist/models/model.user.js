"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaUser = new mongoose_1.Schema({
    email: String,
    password: String
});
exports.default = (0, mongoose_1.model)('users', schemaUser);
