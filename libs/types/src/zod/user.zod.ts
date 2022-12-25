import { z } from 'zod';

export const zCreateUser = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    displayName: z.string(),
  }),
});
