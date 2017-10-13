import axios from 'axios';

export const createUser = (formUser) => {
  return axios.post('/users/auth', formUser)
};

export const fetchUser = (formUser) => {
  return axios.post('/users/auth')
};
