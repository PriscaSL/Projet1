"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
class UsersController {
    constructor() { }
    index(req, res) {
        const users = [];
        res.send({ 'data': users });
    }
    store(req, res) {
    }
}
exports.UsersController = UsersController;
