import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/document_index.css';
import {IndexItem} from './index_item';

class DocumentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.requestDocuments();
  }


  handleClick(e) {
    e.preventDefault();
  }

  handleFilter(e) {
    e.preventDefault();
    const showAll = "Return To All Documents";
    const showYours = "See My Documents";

    if (e.currentTarget.textContent === showYours) {
      this.props.requestOwnerDocuments(this.props.currentUser.username)
      e.currentTarget.textContent = showAll;
    } else {
      e.currentTarget.textContent = showYours;
      this.props.requestDocuments();
    }
  }


  render() {
    let showFilter;
    if (this.props.currentUser) {
      showFilter = <button id="filter-button" onClick={this.handleFilter}>See My Documents</button>;
    }

    return (
      <div className="document-index">
        <div className="index-dashboard-container">
          <div className="index-dashboard">
            <h1 className="index-title">Documents</h1>
            {showFilter}
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
