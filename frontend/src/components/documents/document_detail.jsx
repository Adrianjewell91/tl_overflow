import React from 'react';
import TranslationsIndexContainer from "../translations/translations_index_container";

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
      <div className="document-detail-container">
      <div className="document-detail-header">
        <h1>Document Title: {this.props.document.title}</h1>
      </div>
        <TranslationsIndexContainer />
      </div>
    );
  }
}

export default DocumentDetail;
