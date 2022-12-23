import { UserLoginRes } from '@hospe/types';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.API_URL || 'http://localhost:5000';

const LoginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios
    .post<UserLoginRes>(`${API_URL}/auth/login`, req.body)
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
