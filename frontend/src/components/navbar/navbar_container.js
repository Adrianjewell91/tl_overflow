import {connect} from 'react-redux';
import {signUp, logIn, logOut} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import {requestDocuments} from "../../actions/documents_actions";
import NavBar from './navbar';

const mapStateToProps = state => {
  return {
      currentUser: state.session.currentUser
    };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (formUser) => dispatch(signUp(formUser)),
    logIn: (formUser) => dispatch(logIn(formUser)),
    logOut: () => dispatch(logOut()),
    requestDocuments: () => dispatch(requestDocuments()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
