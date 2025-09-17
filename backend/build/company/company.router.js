"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const company_controller_1 = require("./company.controller");
const companyRouter = (0, express_1.Router)();
exports.companyRouter = companyRouter;
const companyControllerInstance = new company_controller_1.CompanyController();
companyRouter.get('/', companyControllerInstance.index);
