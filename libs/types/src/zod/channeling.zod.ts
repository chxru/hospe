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

// TODO: docName should not pass as a parameter
export const zCreateChanneling = z.object({
  body: z.object({
    docId: z.string(),
    docType: z.string(),
    date: z.string(),
    time: z.string(),
    maximumPatients: z.number().positive(),
    doctorFee: z.number().positive(),
    docName: z.string(),
  }),
});
