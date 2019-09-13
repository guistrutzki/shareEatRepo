import axios from 'axios';

const baseURL = 'http://dev.4all.com:3003';
const api = axios.create({
  baseURL,
});

const getAllTasks = () => api.get('/tarefa');

const getTask = id => api.get(`/tarefa/${id}`);

export default {
  getAllTasks,
  getTask,
};
