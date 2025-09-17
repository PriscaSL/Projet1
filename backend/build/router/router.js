"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterEngine = void 0;
class RouterEngine {
    constructor() {
        this.routers = new Map();
    }
    registerRouter(route, router) {
        this.routers.set(route, router);
    }
    getRouters() {
        return this.routers;
    }
}
exports.RouterEngine = RouterEngine;
