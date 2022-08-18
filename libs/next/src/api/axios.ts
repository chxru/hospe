import axios from 'axios';

const API_URL = process.env['PRODUCTION']
  ? process.env['API_URL']
  : 'http://localhost:5000';

export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});
