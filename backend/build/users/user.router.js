"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
const usersControllerInstance = new users_controller_1.UsersController();
usersRouter.get('/', usersControllerInstance.index);
