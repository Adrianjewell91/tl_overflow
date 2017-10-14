import * as SessionUtil from '../util/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION = 'CLEAR_SESSION';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const clearSession = () => ({
  type: CLEAR_SESSION
});

export const signUp = formUser => dispatch => {
  return SessionUtil.createUser(formUser)
    .then(user => dispatch(receiveCurrentUser({username: user.data.username,
                                               token: user.data.token})))
    .catch(err => dispatch(receiveErrors(err.response.data)))
};

export const logIn = formUser => dispatch => {
  return SessionUtil.fetchUser(formUser)
    .then(user => dispatch(receiveCurrentUser({username: formUser.username,
                                               token: user.data.token})))
    .catch(err => dispatch(receiveErrors(err.response.data)));
};

export const getCurrentUser = () => dispatch => {
  return SessionUtil.getCurrentUser()
    .then(user => dispatch(receiveCurrentUser({username: user.data.username,
                                               token: user.data.token})))
    .catch(() => dispatch(clearSession()))
};

export const logOut = () => dispatch => {
  return SessionUtil.logOutUser().then(() => dispatch(receiveCurrentUser(null)));
};
