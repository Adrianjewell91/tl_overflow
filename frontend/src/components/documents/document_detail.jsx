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
      <div>
        <h1>Document Detail</h1>
        <ul>
          <li>{this.props.document.title}: {this.props.document.body}</li>
        </ul>
        <TranslationsIndexContainer />
        <button>Create a Translation</button>
      </div>
    );
  }
}

export default DocumentDetail;
