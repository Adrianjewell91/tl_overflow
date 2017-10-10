import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Sending a GET API Call !!!");
    axios.get('/documents/')
    .then(res => {
            console.log(res)
    }).then(response => {
        console.log(JSON.stringify(response));
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Sending a Post!");
    axios.post('/documents/', {
      body: "Porfy Test",
      language: "",
      title: "Second-doc"
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Get Docs</button>
        <button onClick={this.handleSubmit}>Submit Doc</button>
      </div>
    );
  }
}

export default App;
