"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = require("./app");
const port = 5000;
const application = new app_1.App(port);
application.start();
