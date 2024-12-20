"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    const statusCode = 404;
    res.status(statusCode).json({
        success: false,
        message: 'API Not Found!!',
        error: ' ',
    });
};
exports.default = notFound;
