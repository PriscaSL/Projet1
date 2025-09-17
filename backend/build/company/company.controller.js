"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
class CompanyController {
    constructor() { }
    index(req, res) {
        const companies = [];
        res.send({ 'data': companies });
    }
}
exports.CompanyController = CompanyController;
