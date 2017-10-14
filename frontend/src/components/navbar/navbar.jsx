import React, { Component } from 'react';

class NavBar extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    
    const welcome = this.props.currentUser ?
      <div>
        Hello {this.props.currentUser.username}.
      </div> :
      <div>
        Hello there. Please Login to submit a translation!
      </div>

    return (
      <div>
        {welcome}
      </div>
    );
  }
}

export default NavBar;
