import { z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;


const idRegex = /^ueb.*/;

export const loginSchema = z.object({
  studentId: z
    .string()
    .regex(idRegex, 'Please enter a valid student ID'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});