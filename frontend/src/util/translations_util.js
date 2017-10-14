import axios from 'axios';

export const getTranslations = (doc_id) => {
  return axios.get(`/api/documents/${doc_id}/translations/`);
}

export const createTranslation = (doc_id, data) => {
  return axios.post(`/api/documents/${doc_id}/translations/`, data);
}
