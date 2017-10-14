import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import configureStore from './store/store'
import * as DocActions from './actions/documents_actions';
import * as TActions from './actions/translation_actions';
import * as SessionActions from './actions/session_actions';

const store = configureStore();

window.DocActions = DocActions;
window.SActions = SessionActions;
window.TActions = TActions
window.getState = store.getState;
window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>, document.getElementById('root'));
