import { CreateChannelingDto, UpdateChannelingDto } from '@hospe/types';
import { ChannelingModel } from './channeling.schema';

export const CreateChanneling = async (
  docId: string,
  docType: string,
  docName: string,
  params: CreateChannelingDto
) => {
  return await ChannelingModel.create({ ...params, docId, docType, docName });
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
