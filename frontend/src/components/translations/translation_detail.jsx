import React from 'react';

class TranslationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.translation || { title: "", body: "", language: "", translations: [] };
  }

  componentDidMount() {
    this.props.requestTranslation(this.props.match.params.documentId, this.props.match.params.translationId)
      .then(res => this.setState(res));
  }


  render() {
    debugger
    return (
      <div className="translation-detail-container hidden">
        <h1>Translation Show</h1>
        <div className="doc-body-container">
          <div className="translation-form-container">
            <div className="translation-form">
              <textarea>{this.props.translation.body}</textarea>
            </div>
            <button>Post New Translation</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TranslationDetail;
