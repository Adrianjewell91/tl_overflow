import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.state = {username: "", email: "", password: ""};
  }

  handleSignUp(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleLogIn(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.logIn(this.state);
  }

  update(field) {
  return (e) => { //no periods allowed for some reason.
    console.log(this.state);
    this.setState({[field]: e.target.value});
  }
}
//ADD VALUE={} TO INPUTS
  render() {
    return (
      <div>
        <h1>Get better results at Translate OverFlow</h1>
          <form onSubmit={this.handleSignUp}>
            <label>
              <input type="text"
                     onChange={this.update('username')}
                     placeholder="Username"></input>
            </label>

            <label>
              <input type="text"
                     onChange={this.update('email')}
                     placeholder="Email"></input>
            </label>

            <label>
              <input type="text"
                     onChange={this.update('password')}
                     placeholder="Password"></input>
            </label>

            <input type="submit" value="Sign Up"></input>
          </form>
            <button onClick={this.handleLogIn}>Log In</button>
      </div>
    );
  }
}

export default Splash;
