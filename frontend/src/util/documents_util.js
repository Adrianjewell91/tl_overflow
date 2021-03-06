import axios from 'axios';

export const getDocuments = () => {
  return axios.get('/api/documents/');
}

export const getOwnerDocuments = (owner) => {
  return axios.get(`/api/documents/?owner=${owner}`, {owner: owner});
}

export const createDocument = (data) => {
  return axios.post('/api/documents/', data);
}

export const getDocument = (id) => {
  return axios.get(`/api/documents/${id}/`);
}
