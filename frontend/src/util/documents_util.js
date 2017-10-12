import axios from 'axios';

export const getDocuments = () => {
  return axios.get('/documents/');
}

export const createDocument = (data) => {
  return axios.post('/documents/', data);
}
