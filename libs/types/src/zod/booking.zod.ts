import { z } from 'zod';

// TODO: why booking requires docID and docName?
export const zCreateBooking = z.object({
  body: z.object({
    bookingId: z.string(),
    docID: z.string(),
    docName: z.string(),
    bookingDate: z.string(),
    bookingTime: z.string(),
    bookingFee: z.number(),
  }),
});

export const zFindOneBooking = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const zDeleteBooking = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const zSpecialization = z.object({
  body: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

export const zConfirmBooking = z.object({
  body: z.object({
    session_id: z.string(),
  }),
});

export const zCheckAvailability = z.object({
  body: z.object({
    id: z.string(),
  }),
});
