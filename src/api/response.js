import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://react-mongo-todo-app.vercel.app',
  timeout: 100,
});
