"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingsRouter = void 0;
const express_1 = require("express");
const listings_controller_1 = require("./listings.controller");
const listingsRouter = (0, express_1.Router)();
exports.listingsRouter = listingsRouter;
const listingsControllerInstance = new listings_controller_1.ListingsController();
listingsRouter.get('/', listingsControllerInstance.index);
