import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/document_index.css';

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
      <div className="document-index">
        <div className="index-dashboard">
          <h1 className="index-title">Documents</h1>
          <button><Link to={'/new'}>New Document</Link></button>
        </div>
        <ul className="index-list">
        {
          this.props.documents.map((doc) => {
            return (<li key={doc.id}>
                   {doc.id}:{doc.title} ({doc.language}): <Link to={`/documents/${doc.id}`}>Translations</Link></li>)})
        }
        </ul>
        <button onClick={this.handleClick}>Log Props.documents</button>
      </div>
    );
  }
}

export default DocumentsIndex;
