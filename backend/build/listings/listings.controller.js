"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingsController = void 0;
class ListingsController {
    constructor() { }
    index(req, res) {
        const listings = [];
        res.send({ 'data': listings });
    }
}
exports.ListingsController = ListingsController;
