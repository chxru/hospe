import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

const RefreshHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const refreshToken = getCookie('refresh-token', { req });

  const response = await axios
    .post('http://localhost:5000/auth/refresh', { refreshToken })
    .then((res) => res.data);

  res.status(200).json(response);
};

export default RefreshHandler;
