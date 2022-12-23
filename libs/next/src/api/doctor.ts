import { ISessionForm } from '@hospe/types';
import { instance } from './axios';

const CreateSession = (props: ISessionForm) => {
  return instance
    .post('/channeling/create-channeling', props)
    .then((res) => res.data);
};

export const Doctor = {
  CreateSession,
};
