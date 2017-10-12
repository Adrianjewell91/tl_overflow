import axios from 'axios';

export const getDocuments = () => {
  return axios.get('/documents/');
}
