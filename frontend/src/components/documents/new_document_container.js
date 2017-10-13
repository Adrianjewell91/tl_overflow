import { connect } from "react-redux";
import { createDocument } from "../../actions/documents_actions";
import DocumentForm from "./new_document";
import { createTranslation } from "../../actions/translation_actions";

const mapStateToProps = state => {
  return {
    documents: Object.values(state.entities.documents)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: formDocument => dispatch(createDocument(formDocument)),
    createTranslation: formTranslaton => dispatch(createTranslation(formTranslaton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentForm);
