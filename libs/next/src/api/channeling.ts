import { CreateChannelingDto } from '@hospe/types';
import { instance } from './axios';

const Create = (props: CreateChannelingDto) => {
  return instance
    .post('/channeling/create-channeling', props)
    .then((res) => res.data);
};

const GetAll = () => {
  return instance.get('/channeling/').then((res) => res.data);
};

const Delete = (props: string) => {
  return instance.delete(`/channeling/${props}`).then((res) => res.data);
};

const GetTypes = (type: string) => {
  return instance.get(`/channeling/type/${type}`).then((res) => res.data);
};

export const Channeling = {
  Create,
  GetAll,
  Delete,
  GetTypes,
};
