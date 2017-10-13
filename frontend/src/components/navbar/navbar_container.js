import {connect} from 'react-redux';
import {signUp, logIn} from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  return {
      currentUser: state.session.currentUser
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser)),
    logIn: (formUser) => dispatch(logIn(formUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
