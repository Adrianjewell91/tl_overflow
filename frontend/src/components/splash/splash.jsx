import React, { Component } from 'react';
import axios from 'axios';


axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }

  handleCreateUser(e) {
    e.preventDefault();
    console.log("Creating a User");
    axios.post('/users/', {
      username: "AdrianJ",
      email: "Adrian.J@outlook.com",
      password: "Dom987654321"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>Get better results at Translate OverFlow</h1>
        <button onClick={this.handleCreateUser}>Create User</button>
      </div>
    );
  }
}

export default Splash;
