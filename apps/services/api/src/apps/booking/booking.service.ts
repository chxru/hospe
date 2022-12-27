import {
  CreateBookingDto,
  CreateSpecializationDto,
  GetSpecializationDto,
} from '@hospe/types';

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

export const CreateSpecialization = async (props: CreateSpecializationDto) => {
  const specialization = await SpecializationModel.create(props);
  return specialization;
};
