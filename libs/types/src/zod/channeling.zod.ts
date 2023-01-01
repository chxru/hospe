import { z } from 'zod';

export const zFindOneChanneling = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const zFinalAllChannelingByDocId = z.object({
  params: z.object({
    docId: z.string(),
  }),
});

export const zFindAllChannelingByDocType = z.object({
  params: z.object({
    docType: z.string(),
  }),
});

export const zDeleteChanneling = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const zCreateChanneling = z.object({
  body: z.object({
    date: z.string(),
    time: z.string(),
    maxPatient: z.number().positive(),
    fee: z.number().positive(),
  }),
});
