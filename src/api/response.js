import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 100,
});
