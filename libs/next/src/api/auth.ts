import {
  VerifyEmployeeMagicReq,
  TokenRefreshRes,
  UserLoginReq,
  UserLoginRes,
} from '@hospe/types';
import axios from 'axios';
import { instance } from './axios';

const Login = (body: UserLoginReq) => {
  return axios
    .post<UserLoginRes>('/api/auth/login', body)
    .then((res) => res.data);
};

const RefreshToken = (): Promise<TokenRefreshRes> => {
  return axios.post('/api/auth/refresh').then((res) => res.data);
};

const MagicLink = (props: VerifyEmployeeMagicReq) => {
  return instance.post('/auth/magic', props).then((res) => res.data);
};

export const Auth = {
  Login,
  RefreshToken,
  MagicLink,
};
