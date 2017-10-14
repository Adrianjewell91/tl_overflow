import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const createUser = (formUser) => {
  return axios.post('/users/', formUser)
};

export const fetchUser = (formUser) => {
  return axios.post('/users/auth',formUser)
};

export const logOutUser = () => {
  return axios.get('/logout')
};

export const getCurrentUser = () => {
  return axios.get('/users/')
};
