import axios from 'axios';

export const axiosApi = axios.create({
  // baseURL: 'https://react-mongo-todo-app.vercel.app',
  baseURL: 'https://react-mongo-todo-app-server.vercel.app',
  timeout: 5000,
});
