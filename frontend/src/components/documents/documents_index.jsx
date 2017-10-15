import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/document_index.css';
import {IndexItem} from './index_item';

class DocumentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleReturnToLogin = this.handleReturnToLogin.bind(this);
  }

  componentDidMount() {
    this.props.requestDocuments();
  }

  handleReturnToLogin(e) {
    e.preventDefault();
    this.props.history.push("/")
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
      showFilter = <div className="index-buttons">
                      <button id="filter-button"
                             className="filter-button"
                             onClick={this.handleFilter}>See My Documents</button>
                       <button className="new-doc-button">
                            <Link to={'/new'}>New Document</Link></button>
                    </div>
    } else {
      showFilter = <div className="index-buttons">
                      <button onClick={this.handleReturnToLogin}
                              className="filter-button">Log in to post a Document</button>
                </div>
    }

    return (
      <div className="document-index">
        <div className="index-dashboard-container">
          <div className="index-dashboard">
            <h1 className="index-dashboard-title">Documents</h1>
            {showFilter}
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
