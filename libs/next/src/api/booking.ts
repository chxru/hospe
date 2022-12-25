import { instance } from './axios';

interface CreateBookingProps {
  sessionId: string;
}

interface UpdateBookingProps {
  id: string;
  activePatients: number;
}

const CreateBooking = (props: CreateBookingProps) => {
  return instance
    .post('/booking/create-booking', props)
    .then((res) => ({ data: res.data, msg: res.status }));
};

export const Booking = {
  CreateBooking,
};
