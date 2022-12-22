import { TokenRefreshRes, UserLoginReq, UserLoginRes } from '@hospe/types';
import axios from 'axios';

interface LoginProps {
  email: string;
  password: string;
}

const Login = ({ email, password }: LoginProps) => {
  const body: UserLoginReq = { email, password };

  return axios
    .post<UserLoginRes>('api/auth/login', body)
    .then((res) => res.data);
};

const RefreshToken = (): Promise<TokenRefreshRes> => {
  return axios.post('api/auth/refresh').then((res) => res.data);
};

export const Auth = {
  Login,
  RefreshToken,
};
