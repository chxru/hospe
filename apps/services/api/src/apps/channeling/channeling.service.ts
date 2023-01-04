import { CreateChannelingDto, Roles, UpdateChannelingDto } from '@hospe/types';
import { NotFoundError, UnauthorizedException } from '../../errors';
import { BookingModel } from '../booking/booking.schema';
import { EmployeeModel } from '../employee/employee.schema';
import { ChannelingModel } from './channeling.schema';

export const CreateChanneling = async (
  userId: string,
  userRole: Roles,
  params: CreateChannelingDto
) => {
  if (userRole != 'doctor') {
    throw new UnauthorizedException('User do not have permission');
  }

  const doctor = await EmployeeModel.findById(userId);

  if (!doctor) {
    throw new NotFoundError('User not found');
  }

  console.log(params);

  const doc = await ChannelingModel.create({
    docId: userId,
    docType: doctor.specialization,
    date: params.date,
    time: params.time,
    maxPatient: params.maxPatient,
    fee: params.fee,
    docName: doctor.displayName,
  });

  return doc;
};

export const FindOneChanneling = async (id: string) => {
  return await ChannelingModel.findOne({ _id: id });
};

export const FindAllChannelingByDocId = async (docId: string) => {
  const data = await ChannelingModel.find({ docId, status: 'open' });

  const res = [];

  for (const item of data) {
    const bookings = await BookingModel.find({ channelingId: item._id });
    res.push({
      _id: item._id.toString(),
      docId: item.docId,
      docType: item.docType,
      date: item.date,
      time: item.time,
      maxPatient: item.maxPatient,
      fee: item.fee,
      docName: item.docName,
      count: bookings.length,
    });
  }

  return res;
};

export const FindAllChannelingByDocType = async (docType: string) => {
  return await ChannelingModel.find({ docType, status: 'open' });
};

export const FindAllChanneling = async () => {
  return await ChannelingModel.find();
};

export const UpdateChanneling = async (
  id: string,
  params: UpdateChannelingDto
) => {
  return await ChannelingModel.findByIdAndUpdate(id, params, { new: true });
};

export const DeleteChanneling = async (id: string) => {
  return await ChannelingModel.findByIdAndRemove(id);
};

export const CloseChanneling = async (id: string) => {
  const channeling = await ChannelingModel.findOneAndUpdate(
    { _id: id },
    { status: 'closed' },
    { new: true }
  );

  if (!channeling) {
    throw new NotFoundError('Channeling session not found');
  }

  await BookingModel.updateMany({ channelingId: id }, { status: 'closed' });

  return channeling;
};
