"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]+)"/);
    const extractedMsg = match && match[1];
    const error = [
        {
            path: '',
            message: `${extractedMsg} is already exists!`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Invalid!!',
        error,
    };
};
exports.default = handleDuplicateError;
