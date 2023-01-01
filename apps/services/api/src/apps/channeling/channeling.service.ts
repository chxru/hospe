import { CreateChannelingDto, Roles, UpdateChannelingDto } from '@hospe/types';
import { NotFoundError, UnauthorizedException } from '../../errors';
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
  return await ChannelingModel.find({ docId });
};

export const FindAllChannelingByDocType = async (docType: string) => {
  console.log(docType);
  return await ChannelingModel.find({ docType });
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
