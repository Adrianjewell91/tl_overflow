import * as DocumentsUtil from "../util/documents_util.js";

export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS";
export const RECEIVE_DOCUMENT = "RECEIVE_DOCUMENT";

export const receiveDocuments = (documents) => ({
  type: RECEIVE_DOCUMENTS,
  documents
});

export const receiveDocument = (a_document) => ({
  type: RECEIVE_DOCUMENT,
  a_document
});

export const requestDocuments = () => (dispatch) => {
  return DocumentsUtil.getDocuments()
    .then((documents) => dispatch(receiveDocuments(documents.data)))
};

export const createDocument = (a_document) => (dispatch) => {
  return DocumentsUtil.createDocument(a_document)
    .then((a_document) => dispatch(receiveDocument(a_document.data)))
};

export const requestDocument = (id) => (dispatch) => {
  return DocumentsUtil.getDocument(id)
    .then((a_document) => dispatch(receiveDocument(a_document.data)))
};
