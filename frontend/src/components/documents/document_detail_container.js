import { connect } from 'react-redux';
import { requestDocument } from "../../actions/documents_actions";
import DocumentDetail from './documents_index';


const mapStateToProps = (state, ownProps) => {
  return {
    document: Object.values(state.entities.documents[ownProps.match.params.documentId])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestDocument: (id) => dispatch(requestDocument(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail);
