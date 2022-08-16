import { UserLoginRes } from '@hospe/types';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

const LoginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios
    .post<UserLoginRes>('http://localhost:5000/auth/login', req.body)
    .then((r) => r.data);

  setCookie('refresh-cookie', response.tokens.refresh.value, {
    httpOnly: true,
    expires: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * Number(response.tokens.refresh.expires)
    ),
    sameSite: true,
    req,
    res,
  });

  // refresh token should not pass to the frontend
  delete response.tokens.refresh;

  res.status(200).json(response);
};

export default LoginHandler;
