import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestTranslation, createTranslation } from "../../actions/translation_actions";
import TranslationNew from './translation_new';


const mapStateToProps = (state, ownProps) => {
  if (Object.values(state.entities.translations).length !== 0) {
    return { translation: Object.values(state.entities.translations) }
  } else {
    return { translation: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestTranslation: (doc_id, trans_id) => dispatch(requestTranslation(doc_id, trans_id)),
    createTranslation: (translation) => dispatch(createTranslation(translation))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TranslationNew));
