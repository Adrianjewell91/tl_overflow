import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/navbar.css';

class NavBar extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this)
    this.handleReturnToIndex = this.handleReturnToIndex.bind(this)
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.logOut();
  }

  handleReturnToIndex (e) {
    e.preventDefault();
    this.props.requestDocuments()
              .then(() => this.props.history.push('/index'));
    if (document.getElementById('filter-button')) {
      document.getElementById('filter-button').textContent = "See My Documents";
    }
  }

  render() {

    const welcome = this.props.currentUser ?
      <div className="status-info-inner-container">
        <button onClick={this.handleSignOut}>Sign Out!</button>
      </div> :
      <div className="status-info-inner-container">
        <p>Please Sign In</p>
        <Link to={"/"}>Login</Link>
      </div>

    return (
      <div className='navbar'>
        <div className="navbar-inner-container">
          <div className="nav-logo-and-user-info">
            <div className="logo-container">
              <div className="logo">
                <img src="http://res.cloudinary.com/ssj6porfy/image/upload/v1508089671/tl_overflow_logo_drbmmf.png"></img>
              </div>
              <div className="logo-words">
                Translation Overflow
              </div>
            </div>
          </div>
          <div className="all-documents-btn-container">
            <button onClick={this.handleReturnToIndex}>All Documents</button>
          </div>
          <div className="status-info-container">
            {welcome}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
