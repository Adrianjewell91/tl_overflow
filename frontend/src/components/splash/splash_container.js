import {connect} from 'react-redux';
import {signUp, logIn, clearSession} from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => {
  return {
      currentUser: state.session.currentUser
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser)),
    logIn: (formUser) => dispatch(logIn(formUser)),
    clearSession: () => dispatch(clearSession())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
