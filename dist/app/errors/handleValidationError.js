"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    const error = Object.values(err.errors).map((val) => {
        return {
            path: val === null || val === void 0 ? void 0 : val.path,
            message: val === null || val === void 0 ? void 0 : val.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        error,
    };
};
exports.default = handleValidationError;
