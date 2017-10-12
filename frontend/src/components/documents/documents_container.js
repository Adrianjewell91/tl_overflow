import {connect} from 'react-redux';
import {requestDocuments} from "../../actions/documents_actions";
import DocumentsIndex from './documents_index';


const mapStateToProps = state => {
  return {
    originals: Object.values(state.entities.documents)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestDocuments: () => dispatch(requestDocuments())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsIndex);
