import {
  ConfirmBookingDto,
  CreateSpecializationDto,
  GetSpecializationDto,
} from '@hospe/types';
import { instance } from './axios';

const Confirm = (props: ConfirmBookingDto) => {
  return instance.post('/booking/confirm', props).then((res) => res.data);
};

const GetSpecializations = (): Promise<GetSpecializationDto> => {
  return instance.get('/booking/specialization').then((res) => res.data);
};

const CreateSpecialization = (props: CreateSpecializationDto) => {
  return instance
    .post('/booking/specialization', props)
    .then((res) => res.data);
};

export const Booking = {
  Confirm,
  GetSpecializations,
  CreateSpecialization,
};
