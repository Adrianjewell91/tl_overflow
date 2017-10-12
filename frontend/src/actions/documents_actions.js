import * as DocumentsUtil from "../util/documents_util.js";

export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS";

export const receiveDocuments = (documents) => ({
  type: RECEIVE_DOCUMENTS,
  documents
});

export const requestDocuments = () => (dispatch) => {
  return DocumentsUtil.getDocuments()
    .then((documents) => dispatch(receiveDocuments(documents.data)))
};
