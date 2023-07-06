import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://vercel.com/heesunae/react-mongo-todo-app',
  timeout: 100,
});
