import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => {
  return {
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
