import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestTranslations,
         createTranslation } from "../../actions/translation_actions";
import TranslationsIndex from './translations_index';

const mapStateToProps = (state, ownProps) => {
  return {
    translations: Object.values(state.entities.translations),
    document: Object.values(state.entities.documents)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestTranslations: (doc_id) => dispatch(requestTranslations(doc_id)),
    createTranslation: (doc_id, translation) => dispatch(createTranslation(doc_id, translation))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TranslationsIndex));
