import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/navbar.css';

class NavBar extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.logOut();
  }

  render() {

    const welcome = this.props.currentUser ?
      <div className="status-info-inner-container">
        Hello {this.props.currentUser.username}.
        <button onClick={this.handleSignOut}>Sign Out!</button>
      </div> :
      <div className="status-info-inner-container">
        <Link to={"/"}>Login</Link>
      </div>

    return (
      <div className='navbar'>
        <div className="navbar-inner-container">
          <div className="nav-logo-and-user-info">
            <div className="logo-container">
              <div className="logo">
                <img src="http://res.cloudinary.com/ssj6porfy/image/upload/v1508050340/tl_overflow_logo_s80w93.png"></img>
              </div>
              <div className="logo-words">
                Translation Overflow
              </div>
            </div>
          </div>
          <div className="all-documents-btn-container">
            <button><Link to={'/index'}>All Documents</Link></button>
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
