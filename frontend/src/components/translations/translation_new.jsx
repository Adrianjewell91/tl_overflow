import React from 'react';

class TranslationNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.translation[this.props.translation.length - 1] || { body: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.translationId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const doc_id = this.props.match.params.documentId;
    delete this.state["id"];
    // eslint-disable-next-line
    this.state.doc_id = doc_id;
    console.log(doc_id);
    console.log(this.state);
    this.props.createTranslation(doc_id, this.state)
      .then(() => {
        this.props.history.goBack();
      });
  }

  render() {
    let text;

    if (!!this.props.translation[this.props.translation.length - 1]) {
      let trans = this.props.translation[this.props.translation.length - 1];
      text = trans.body;
    } else {
      text = "";
    }
    console.log(this.state);
    if (this.props.match.params.translationId) {
      text = this.state.body;
    }
    return (
      <div className="translation-detail-container">
        <h1>New Translation</h1>
        <div className="doc-body-container">
          <div className="translation-form-container">
            <form onSubmit={this.handleSubmit} className="translation-form">
              <textarea className="translation-testfield" onChange={this.update("body")} value={text}/>
              <input type="submit" value="Create New Translation"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TranslationNew;
