import React, { Component } from 'react';

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
    this.props.signUp(this.state);
  }

  handleLogIn(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.logIn({username: this.state.username,
                      password: this.state.password});
  }

  handleSignOut(e) {
    e.preventDefault();
    console.log('sign out now');
    this.setState({username: "", email: "", password: ""})
    this.props.clearSession();
  }

  update(field) {
    return (e) => { //no periods allowed for some reason.
      console.log(this.state);
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    const form = this.props.currentUser ?
      <button onClick={this.handleSignOut}>Your logged in. Sign Out!</button> :
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
                     onChange={this.update('email')}
                     placeholder="Email (Sign up only)"
                     value={this.state.email}></input>
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
