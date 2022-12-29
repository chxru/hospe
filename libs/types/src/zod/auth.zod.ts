import { z } from 'zod';

export const zRoles = z.enum(['admin', 'doctor', 'user']);

export const zLogin = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: zRoles,
  }),
});

export const zToken = z.object({
  body: z.object({
    refreshToken: z.string(),
  }),
});

export const zMagic = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    token: z.string(),
  }),
});
