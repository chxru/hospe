import { zConfirmBooking, zCreateBooking, zSpecialization } from '../../zod/';
import { z } from 'zod';

export type CreateBookingDto = z.infer<typeof zCreateBooking>['body'];
export type CreateSpecializationDto = z.infer<typeof zSpecialization>['body'];
export type ConfirmBookingDto = z.infer<typeof zConfirmBooking>['body'];

export interface GetSpecialization extends CreateSpecializationDto {
  id: string;
}
export type GetSpecializationDto = {
  data: GetSpecialization[];
};
