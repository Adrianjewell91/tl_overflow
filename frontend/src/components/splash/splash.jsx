import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.state = {username: "", email: "", password: ""};
  }

  componentWillMount() {
    //redirect if currentUser
  }

  handleSignUp(e) {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleLogIn(e) {
    e.preventDefault();
    this.props.logIn({username: this.state.username,
                      password: this.state.password});
  }


  handleSignOut(e) {
    e.preventDefault();
    this.setState({username: "", email: "", password: ""})
    this.props.logOut();
  }

  update(field) {
    return (e) => { //no periods allowed for some reason.
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    const form = this.props.currentUser ?
      <div>
        <button onClick={this.handleSignOut}>You're logged in. Sign Out!</button>
        <Link to={"/index"}> See Recent Translations</Link>
      </div> :
        <div>
          <form onSubmit={this.handleSignUp}>
            <label>
              <input type="text"
                     onChange={this.update('username')}
                     placeholder="Username"
                     value={this.state.username}></input>
            </label>

            <label>
              <input type="text"
                     onChange={this.update('password')}
                     placeholder="Password"
                     value={this.state.password}></input>
            </label>

            <input type="submit" value="Sign Up"></input>
          </form>
            <button onClick={this.handleLogIn}>Log In</button>

            <button>
              <a href="https://pure-crag-76247.herokuapp.com/login/">
                      HEROKU LOGIN</a></button>
        </div>


    return (
      <div>
        <h1>Get better results at Translate OverFlow</h1>
        {form}
        <ul>
          {
            this.props.errors.map((err) => <li key={err}>{err}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Splash;
