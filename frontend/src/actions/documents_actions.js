// import * as DocumentsUtil from "../util/documents_util.js";

export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS";

export const receiveDocuments = (documents) => ({
  type: RECEIVE_DOCUMENTS,
  documents
});
