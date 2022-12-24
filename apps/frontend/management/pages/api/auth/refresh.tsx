import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.API_URL || 'http://localhost:5000';

const RefreshHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const refreshToken = getCookie('refresh-cookie', { req });

  const response = await axios
    .post(`${API_URL}/auth/token`, { refreshToken })
    .then((res) => res.data)
    .catch(() => {
      // pass silently
      return null;
    });

  res.status(200).json(response);
};

export default RefreshHandler;
