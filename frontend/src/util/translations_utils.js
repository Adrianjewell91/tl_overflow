import axios from 'axios';

export const getTranslations = (doc_id) => {
  return axios.get(`/documents/${doc_id}/translations/`);
}

export const createTranslation = (doc_id, data) => {
  return axios.post(`/documents/${doc_id}/translations/`, data);
}
