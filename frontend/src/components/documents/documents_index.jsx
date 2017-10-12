import React from 'react';

class DocumentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.requestDocuments();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Fill the state with docs!</button>
      </div>
    );
  }
}

export default DocumentsIndex;
