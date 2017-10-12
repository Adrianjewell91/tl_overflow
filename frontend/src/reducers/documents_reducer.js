import {RECEIVE_DOCUMENTS} from '../actions/documents_actions';

const DocumentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOCUMENTS:
      const new_state = {};
      action.documents.forEach((el) => new_state[el.id] = el);
      return new_state;
    default:
      return {};
  }
};

export default DocumentsReducer;
