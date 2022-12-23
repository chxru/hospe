import { model } from 'mongoose';
import { CreateChannelingDto, UpdateChannelingDto } from './channeling.dto';
import { ChannelingSchema } from './channeling.schema';

const ChannelingModel = model('Channeling', ChannelingSchema);

export const CreateChanneling = async (params: CreateChannelingDto) => {
  return await ChannelingModel.create(params);
};

export const FindOneChanneling = async (id: string) => {
  return await ChannelingModel.findOne({ _id: id });
};

export const FindAllChanneling = async () => {
  return await ChannelingModel.find();
}

export const UpdateChanneling = async (
  id: string,
  params: UpdateChannelingDto
) => {
  return await ChannelingModel.findByIdAndUpdate(id, params, { new: true });
};

export const DeleteChanneling = async (id: string) => {
  return await ChannelingModel.findByIdAndRemove(id);
};
