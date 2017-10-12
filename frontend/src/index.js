import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { Provider } from 'react-redux';
import configureStore from './store/store'
import * as DocActions from './actions/documents_actions';

const store = configureStore();

window.DocActions = DocActions;
window.getState = store.getState;
window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
