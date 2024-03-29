import axios from 'axios';
import { useAuthStore } from '../store';

const API_URL = process.env['API_URL'] || 'http://localhost:5000';

export let instance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    authorization: `Bearer ${useAuthStore.getState().accessToken}`,
  },
});

export const UpdateAxiosInstance = (token: string) => {
  instance = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
