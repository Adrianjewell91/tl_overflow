import {connect} from 'react-redux';
import {requestDocuments, requestOwnerDocuments} from "../../actions/documents_actions";
import DocumentsIndex from './documents_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    documents: Object.values(state.entities.documents),
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestDocuments: () => dispatch(requestDocuments()),
    requestOwnerDocuments: (owner) => dispatch(requestOwnerDocuments(owner))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentsIndex));
