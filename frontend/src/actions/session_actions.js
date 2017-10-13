import * as SessionUtil from '../util/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });
//
// export const clearSessionErrors = () => ({
//   type: CLEAR_SESSION_ERRORS,
// });


export const signUp = formUser => dispatch => {
  return SessionUtil.createUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user.data.token)))
};

export const logIn = formUser => dispatch => {
  return SessionUtil.fetchUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user.data.token)))
    // .fail(err => dispatch(receiveErrors(err)));
};

// export const logout = () => dispatch => {
//   return SessionUtil.destroySession().then(() => dispatch(receiveCurrentUser(null)));
// };
