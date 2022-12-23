import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

const RefreshHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const refreshToken = getCookie('refresh-cookie', { req });

  const response = await axios
    .post('http://localhost:5000/auth/token', { refreshToken })
    .then((res) => res.data)
    .catch(() => {
      // pass silently
      return null;
    });

  res.status(200).json(response);
};

export default RefreshHandler;
