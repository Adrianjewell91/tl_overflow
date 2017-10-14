import {RECEIVE_CURRENT_USER, CLEAR_SESSION} from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    case CLEAR_SESSION:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;
