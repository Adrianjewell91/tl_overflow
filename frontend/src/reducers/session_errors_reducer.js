import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      const errors = [];
      Object.keys(action.errors).forEach((err) => {
        errors.push(`${err[0].toUpperCase()}${err.slice(1,err.length)}: ${action.errors[err]}`);
      });
      return errors;
    default:
      return [];
  }
};

export default SessionErrorsReducer;
