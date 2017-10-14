import React from 'react';
import TranslationsIndexContainer from "../translations/translations_index_container";
import TranslationDetailContainer from "../translations/translation_detail_container";

class DocumentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.document || { title: "", body: "", language: "", translations: [] };
  }

  componentDidMount() {
    this.props.requestDocument(this.props.match.params.documentId)
      .then(res => this.setState(res));
  }


  render() {
    return (
      <div>
        <h1>{this.props.document.title}</h1>
        <TranslationsIndexContainer />
        <TranslationDetailContainer />
      </div>
    );
  }
}

export default DocumentDetail;
