import React from 'react';

class DocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDocument({title:"test document", body:"Test", language:'en'});
  }

  render() {
    return (
      <div>
        <h1>New Document</h1>
        <button onClick={this.handleSubmit}>Create A test document</button>
      </div>
    );
  }
}

export default DocumentForm;
