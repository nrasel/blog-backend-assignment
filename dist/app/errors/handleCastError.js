"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const error = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Invalid ID',
        error,
    };
};
exports.default = handleCastError;
