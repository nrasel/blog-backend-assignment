import { z } from 'zod';

const blogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').trim(),
    content: z.string().min(1, 'Content is required'),
    author: z.string().uuid('Invalid author ID'),
    isPublished: z.boolean().default(true),
  }),
});

export const blogValidation = {
  blogValidationSchema,
};
