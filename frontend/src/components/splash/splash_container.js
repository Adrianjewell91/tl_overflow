import {connect} from 'react-redux';
import {signUp, logIn, logOut} from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => {
  // debugger
  return {
      currentUser: state.session.currentUser,
      errors: state.errors.session
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser)),
    logIn: (formUser) => dispatch(logIn(formUser)),
    logOut: () => dispatch(logOut())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
