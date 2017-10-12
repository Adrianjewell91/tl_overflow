import { combineReducers } from 'redux';
import DocumentsReducer from './documents_reducer';
// import TranslationsReducer from './translations_reducer';

const EntitiesReducer = combineReducers({
  documents: DocumentsReducer
});

export default EntitiesReducer;
