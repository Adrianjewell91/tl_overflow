import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDocument } from "../../actions/documents_actions";
import DocumentDetail from './document_detail';


const mapStateToProps = (state, ownProps) => {
  if (state.entities.documents[1]) {
    return { document: state.entities.documents[1] }
  } else {
    return { document: Object.values(state.entities.documents) }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestDocument: (id) => dispatch(requestDocument(id))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentDetail));
