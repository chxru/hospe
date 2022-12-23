import { CreateChannelingDto, UpdateChannelingDto } from './channeling.dto';
import { ChannelingModel } from './channeling.schema';

export const CreateChanneling = async (
  docId: string,
  params: CreateChannelingDto
) => {
  return await ChannelingModel.create({ ...params, docId });
};

export const FindOneChanneling = async (id: string) => {
  return await ChannelingModel.findOne({ _id: id });
};

export const FindAllChannelingByDocId = async (docId: string) => {
  return await ChannelingModel.find({ docId });
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
