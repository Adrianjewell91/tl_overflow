import {connect} from 'react-redux';
import {signUp, logIn} from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => {
  return {
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser)),
    logIn: (formUser) => dispatch(logIn(formUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
