"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const mongoose_1 = require("mongoose");
const listingSchema = new mongoose_1.Schema({
    title: { type: String, required: true, },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    apply_link: { type: String, required: true },
    description: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    company: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Company' },
    created_at: { type: Date, default: Date.now },
});
const Listing = (0, mongoose_1.model)('Listing', listingSchema);
exports.Listing = Listing;
