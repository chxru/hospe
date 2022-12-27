import { z } from 'zod';

export const zCreateEmployee = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    gender: z.string(),
    phone: z.string(),
    specialization: z.string(),
    qualification: z.string(),
  }),
});
