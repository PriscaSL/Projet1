"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = require("mongoose");
const companySchema = new mongoose_1.Schema({
    name: { type: String, requried: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    founded: { type: Number, required: true },
    specialties: { type: [String], required: true },
    location: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const Company = (0, mongoose_1.model)('Company', companySchema);
exports.Company = Company;
