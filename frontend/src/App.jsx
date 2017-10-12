import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import DocumentsIndexContainer from './components/documents/documents_container';
import DocumentFormContainer from './components/documents/new_document_container';
import SplashContainer from './components/splash/splash_container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/index" component={DocumentsIndexContainer}/>
          <Route path="/new" component={DocumentFormContainer}/>
          <Route path="/" component={SplashContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
