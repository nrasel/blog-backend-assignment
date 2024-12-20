"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = require("zod");
const blogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, 'Title is required').trim(),
        content: zod_1.z.string().min(1, 'Content is required'),
        author: zod_1.z.string().uuid('Invalid author ID').optional(),
        isPublished: zod_1.z.boolean().default(true),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, 'Title is required').trim().optional(),
        content: zod_1.z.string().min(1, 'Content is required').optional(),
        author: zod_1.z.string().uuid('Invalid author ID').optional()
    }),
});
exports.blogValidation = {
    blogValidationSchema,
    updateBlogValidationSchema,
};
