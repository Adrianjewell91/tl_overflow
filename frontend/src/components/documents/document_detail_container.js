import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDocument } from "../../actions/documents_actions";
import { requestTranslations } from "../../actions/translation_actions";
import DocumentDetail from './document_detail';


const mapStateToProps = (state, ownProps) => {
  if (state.entities.documents) {
    return { document: state.entities.documents }
  } else {
    return { document: Object.values(state.entities.documents) }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestDocument: (id) => dispatch(requestDocument(id)),
    requestTranslations: (doc_id) => dispatch(requestTranslations(doc_id))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentDetail));
