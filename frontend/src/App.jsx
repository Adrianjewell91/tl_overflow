import React, { Component } from 'react';
import DocumentsContainer from './components/documents/documents_container';
import DocumentFormContainer from './components/documents/new_document_container';
import SplashContainer from './components/splash/splash_container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentsContainer/>
        <DocumentFormContainer/>
        <SplashContainer/>
      </div>
    );
  }
}

export default App;
