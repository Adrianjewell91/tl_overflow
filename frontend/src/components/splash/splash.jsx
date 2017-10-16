import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../stylesheets/splash.css';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.state = {username: "", email: "", password: ""};
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    if (this.props.currentUser) {
      this.props.history.push('/index');
    }
  }

  handleSignUp(e) {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleLogIn(e) {
    e.preventDefault();
    this.props.logIn({username: this.state.username,
                      password: this.state.password})
    this.setState({username: "", password: ""});
  }

  handleSignOut(e) {
    e.preventDefault();
    this.setState({username: "", email: "", password: ""})
    this.props.logOut();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    const form = this.props.currentUser ?
      <div className="splash-logged-in">
        <button onClick={this.handleSignOut}>You're logged in. Sign Out!</button>
        <Link to={"/index"}> See Recent Translations</Link>
      </div> :
        <div>
          <form onSubmit={this.handleSignUp}>
              <input type="text"
                     onChange={this.update('username')}
                     placeholder="Username"
                     value={this.state.username}></input>

              <ul>
                 {
                   this.props.errors.map((err) => <li className="errors" key={err}>{err}</li>)
                 }
               </ul>
              <input type="password"
                     onChange={this.update('password')}
                     placeholder="Password"
                     value={this.state.password}></input>

            <div className="login-btn-container">
              <button onClick={this.handleLogIn}>
                Login
              </button>
              <input type="submit" value="Sign Up"></input>
            </div>
          </form>
        </div>


    return (
      <div className="splash">
        <div className="splash-content">
          <div className="splash-greeting">
            <h2>Get better results with</h2>
            <br/>
            <h1>Translate OverFlow</h1>
          </div>

          <div className="splash-form">
            {form}
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
