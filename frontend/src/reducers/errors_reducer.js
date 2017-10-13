import { combineReducers } from 'redux';
import SessionErrorsReducer from './documents_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducer;
