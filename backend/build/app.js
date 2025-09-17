"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
class App {
    constructor(port) {
        this.app = express();
        this.port = port;
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        });
    }
}
exports.App = App;
