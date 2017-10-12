import React from 'react';

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
    this.props.requestDocument("1").then(res => this.setState(res));
  }

  render() {
    let name = this.props.document.title;
    let translations;
    if (this.props.document.translations !== undefined) {
      translations = this.props.document.translations.map((tran, idx) => {
        return <li>{tran}</li>
      })
    } else {
      translations = ""
    }

    return (
      <div>
        <h1>Document Detail</h1>
        <ul>
          <li>{name}</li>
          { translations }
        </ul>
        <button>Create a Translation</button>
      </div>
    );
  }
}

export default DocumentDetail;
