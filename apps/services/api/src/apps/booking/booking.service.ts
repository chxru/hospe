import { SendEmail } from '../email/email.service';
import { UserModel } from '../user/user.schema';
import { CreateBookingDto, UpdateBookingDto } from './booking.dto';
import { BookingModel } from './booking.schema';

//const BookingModel = model('Booking', BookingSchema);

export const CreateBooking = async (
  userID,
  userName,
  params: CreateBookingDto
) => {
  return await BookingModel.create({ ...params, userID, userName });
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
