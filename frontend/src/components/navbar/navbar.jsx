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
      <div>
        Hello {this.props.currentUser.username}.
        <button onClick={this.handleSignOut}>Sign Out!</button>
      </div> :
      <div>
        <Link to={"/"}>Login</Link> to submit a translation!
      </div>

    return (
      <div className='navbar'>
        <div className="nav-logo-and-user-info">
          <div className="logo">
            Translation Overflow
          </div>
          {welcome}
        </div>
        <button><Link to={'/index'}>All Documents</Link></button>
      </div>
    );
  }
}

export default NavBar;
