import axios from 'axios';

export const axiosApi = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://react-mongo-todo-app-server.vercel.app',
  timeout: 5000,
  withCredentials: true,
});
