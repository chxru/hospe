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

const CheckAvailability = (session_id: string) => {
  return instance
    .post('/booking/available', { id: session_id })
    .then((res) => res.data);
};

const GetMy = () => {
  return instance.get('/booking/my').then((res) => res.data);
};

export const Booking = {
  Confirm,
  GetSpecializations,
  CreateSpecialization,
  CheckAvailability,
  GetMy,
};
