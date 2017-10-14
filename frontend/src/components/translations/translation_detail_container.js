import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestTranslation } from "../../actions/translation_actions";
import TranslationDetail from './translation_detail';


const mapStateToProps = (state, ownProps) => {
  if (Object.values(state.entities.translations).length !== 0) {
    return { translation: Object.values(state.entities.translations) }
  } else {
    return { translation: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestTranslation: (doc_id, trans_id) => dispatch(requestTranslation(doc_id, trans_id))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TranslationDetail));
