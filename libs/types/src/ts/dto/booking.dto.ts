import { zCreateBooking, zSpecialization } from '../../zod/';
import { z } from 'zod';

export type CreateBookingDto = z.infer<typeof zCreateBooking>['body'];
export type CreateSpecializationDto = z.infer<typeof zSpecialization>['body'];

interface GetSpecialization extends CreateSpecializationDto {
  id: string;
}
export type GetSpecializationDto = {
  data: GetSpecialization[];
};
