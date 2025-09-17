"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundHandler = void 0;
function NotFoundHandler(app) {
    app.use((req, res, next) => {
        res.status(404).send({
            status: 404,
            error: 'Not Found',
            message: 'Requested resource could not be found on this server!'
        });
    });
}
exports.NotFoundHandler = NotFoundHandler;
