import { TokenRefreshRes, UserLoginReq, UserLoginRes } from '@hospe/types';
import axios from 'axios';

const Login = (body: UserLoginReq) => {
  return axios
    .post<UserLoginRes>('/api/auth/login', body)
    .then((res) => res.data);
};

const RefreshToken = (): Promise<TokenRefreshRes> => {
  return axios.post('/api/auth/refresh').then((res) => res.data);
};

export const Auth = {
  Login,
  RefreshToken,
};
