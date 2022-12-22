import { model } from 'mongoose';
import { CreateBookingDto } from './booking.dto';
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
