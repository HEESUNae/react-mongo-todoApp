import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});
