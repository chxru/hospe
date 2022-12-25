import { CreateBookingDto } from '@hospe/types';
import { model } from 'mongoose';

import { SendEmail } from '../email/email.service';
import { UserModel } from '../user/user.schema';
import { BookingSchema } from './booking.schema';

const BookingModel = model('Booking', BookingSchema);

export const CreateBooking = async (params: CreateBookingDto) => {
  return await BookingModel.create(params);
};

export const FindOneBooking = async (id: string) => {
  return await BookingModel.findOne({ _id: id });
};

export const DeleteBooking = async (id: string) => {
  return await BookingModel.findByIdAndRemove(id);
};

interface confirm {
  cost: number;
}
export const ConfirmBooking = async (userId: string, props: confirm) => {
  const user = await UserModel.findById(userId);

  if (user) {
    SendEmail({
      to: user.email,
      subject: 'Booking Confirmed',
      text: `Your booking has been confirmed. The total cost is ${props.cost}`,
    });
  }
};
