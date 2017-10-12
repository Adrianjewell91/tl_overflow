import React, { Component } from 'react';
import DocumentsContainer from './components/documents/documents_container';
import DocumentFormContainer from './components/documents/new_document_container';
import SplashContainer from './components/splash/splash_container';
import DocumentDetailContainer from './components/documents/document_detail_container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentDetailContainer />
      </div>
    );
  }
}

export default App;

/* <DocumentsContainer/> */
/* <DocumentFormContainer/>
<SplashContainer/> */
