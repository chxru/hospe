import { UserRegisterReq } from '@hospe/types';
import { instance } from './axios';

const CreateUser = (user: UserRegisterReq) => {
  return instance.post('/user/create', user).then((res) => res.data);
};

export const User = {
  CreateUser,
};
