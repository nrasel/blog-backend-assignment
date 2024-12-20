"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, 'Name is required')
            .max(20, 'Name cannot exceed 20 characters'),
        email: zod_1.z.string().min(1, 'Email is required').email('Invalid email format'),
        password: zod_1.z
            .string({
            required_error: 'Password required!!',
            invalid_type_error: 'Invalid Password!!',
        })
            .max(20, { message: 'Password can not be more thatn 20 characters' })
            .optional(),
    }),
});
exports.UserValidation = {
    userValidationSchema,
};
