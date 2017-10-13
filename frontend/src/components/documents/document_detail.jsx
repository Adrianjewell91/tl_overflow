import React from 'react';
import TranslationsIndexContainer from "../translations/translations_index_container";
class DocumentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      language: "",
      translations: []
    }
  }

  componentDidMount() {
    this.props.requestDocument(this.props.match.params.documentId)
      .then(res => this.setState(res));
  }

  render() {
    let name = this.props.document.title;

    return (
      <div>
        <h1>Document Detail</h1>
        <ul>
          <li>{name}</li>
          <TranslationsIndexContainer />
        </ul>
        <button>Create a Translation</button>
      </div>
    );
  }
}

export default DocumentDetail;
