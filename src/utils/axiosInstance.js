import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://kinrabb.com',

  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  headers: {
    Accept: 'application/json,*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
  },
});

export default axiosInstance;
