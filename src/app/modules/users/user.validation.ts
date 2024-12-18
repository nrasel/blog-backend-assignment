import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(20, 'Name cannot exceed 20 characters'),

    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more thatn 20 characters' })
      .optional(),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
