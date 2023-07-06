import axios from 'axios';

export const axiosApi = axios.create({
  // baseURL: 'https://react-mongo-todo-app.vercel.app',
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});
