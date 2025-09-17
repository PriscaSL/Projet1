"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
