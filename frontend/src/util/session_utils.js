import axios from 'axios';

export const createUser = (formUser) => {
  return axios.post('/users/', formUser)
};

export const fetchUser = (formUser) => {
  return axios.get('/users/')
};
