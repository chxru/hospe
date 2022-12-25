import { zCreateBooking } from '../../zod/';
import { z } from 'zod';

export type CreateBookingDto = z.infer<typeof zCreateBooking>['body'];
