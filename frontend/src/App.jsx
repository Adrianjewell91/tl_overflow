import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import DocumentsIndexContainer from './components/documents/documents_index_container';
import DocumentFormContainer from './components/documents/new_document_container';
import SplashContainer from './components/splash/splash_container';
import DocumentDetailContainer from './components/documents/document_detail_container';
import TranslationNewContainer from "./components/translations/translation_new_container";
import NavBar from './components/navbar/navbar_container';
import {ProtectedRoute} from './util/route_util.jsx';

import "./stylesheets/carousel.css";
import "./stylesheets/docForm.css";
import "./stylesheets/detail.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/index" component={DocumentsIndexContainer}/>
          <ProtectedRoute path="/new" component={DocumentFormContainer}/>
          <ProtectedRoute exact path="/documents/:documentId/translations/:translationId" component={TranslationNewContainer}/>
          <Route path="/documents/:documentId" component={DocumentDetailContainer}/>
          <Route path="/" component={SplashContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
