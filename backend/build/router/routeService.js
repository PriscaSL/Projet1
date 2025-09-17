"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteService = void 0;
const router_1 = require("./router");
class RouteService {
    constructor(app) {
        this.app = app;
        this.router = new router_1.RouterEngine();
        this.bindRouters();
    }
    bindRouters() {
    }
    run() {
        this.router.getRouters().forEach((router, route) => {
            this.app.use(route, router);
        });
    }
}
exports.RouteService = RouteService;
