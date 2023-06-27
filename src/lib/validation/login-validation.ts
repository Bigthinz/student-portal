import { z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;



export const loginSchema = z.object({
  studentId: z
    .string()
    .min(5, { message: 'Please enter a valid student Id ' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});