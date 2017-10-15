import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/document_index.css';
import {IndexItem} from './index_item';

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
  }

//I want to show them on the page.
  render() {
    return (
      <div className="document-index">

        <div className="index-dashboard-container">
          <div className="index-dashboard">
            <h1 className="index-title">Documents</h1>
            <button><Link to={'/new'}>New Document</Link></button>
          </div>
        </div>

        <ul className="index-list">
        {
          this.props.documents.map((doc) => {
            return (<IndexItem key={doc.id} doc={doc}/>)
          })
        }
        </ul>

      </div>
    );
  }
}

export default DocumentsIndex;
