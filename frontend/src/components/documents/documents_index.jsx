import React from 'react';
import { Link } from 'react-router-dom';

class DocumentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestDocuments();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.requestDocuments();
    console.log(this.props.documents);
  }

//I want to show them on the page.
  render() {
    return (
      <div>
        <h1>Documents</h1>
        <ul>
        {
          this.props.documents.map((doc) => {
            return (<li key={doc.id}>
                  {doc.id}:{doc.title} ({doc.language}): <Link to={`/documents/${doc.id}`}>Translation</Link></li>)})
        }
        </ul>
        <button onClick={this.handleClick}>Log Props.documents</button>
      </div>
    );
  }
}

export default DocumentsIndex;
