import React from 'react';

class DocumentDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestDocument(this.match.params.documentId);
  }


  render() {
    return (
      <div>
        <h1>Document Detail</h1>
        <button>Create a Translation</button>
      </div>
    );
  }
}

export default DocumentDetail;
