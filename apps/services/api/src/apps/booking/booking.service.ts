import {
  ConfirmBookingDto,
  CreateBookingDto,
  CreateSpecializationDto,
  GetSpecializationDto,
} from '@hospe/types';
import { ChannelingModel } from '../channeling/channeling.schema';

import { SendEmail } from '../email/email.service';
import { UserModel } from '../user/user.schema';
import { BookingModel, SpecializationModel } from './booking.schema';

export const CreateBooking = async (params: CreateBookingDto) => {
  return await BookingModel.create(params);
};

export const FindOneBooking = async (id: string) => {
  return await BookingModel.findOne({ _id: id });
};

export const DeleteBooking = async (id: string) => {
  return await BookingModel.findByIdAndRemove(id);
};

export const ConfirmBooking = async (
  userId: string,
  props: ConfirmBookingDto
) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const channeling = await ChannelingModel.findById(props.session_id);
  if (!channeling) {
    throw new Error('session not found');
  }

  const total_booking = await BookingModel.find({
    channelingId: props.session_id,
  });
  if (total_booking.length >= channeling.maxPatient) {
    throw new Error('session is full');
  }

  const booking = await BookingModel.create({
    channelingId: props.session_id,
    userId: userId,
    fee: channeling.fee,
    docName: channeling.docName,
    docId: channeling.docId,
    bookingDate: channeling.date,
    bookingTime: channeling.time,
    bookingFee: channeling.fee,
  });

  if (!booking) {
    throw new Error('booking failed');
  }

  SendEmail({
    to: user.email,
    subject: 'Booking Confirmed',
    text: `Your booking has been confirmed. The total cost is ${channeling.fee}`,
  });
};

export const FindAllSpecializations = async () => {
  const res = await SpecializationModel.find();
  if (!res) {
    return [];
  }

  const data: GetSpecializationDto['data'] = [];
  res.forEach((x) =>
    data.push({
      id: x._id.toString(),
      label: x.label,
      value: x.value,
    })
  );

  return data;
};

export const CheckAvailability = async (userId: string, session_id: string) => {
  const booking = await BookingModel.find({
    channelingId: session_id,
    userId: userId,
  });

  if (booking.length > 0) {
    return false;
  }

  return true;
};

export const CreateSpecialization = async (props: CreateSpecializationDto) => {
  const specialization = await SpecializationModel.create(props);
  return specialization;
};
