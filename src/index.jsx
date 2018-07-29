import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logoReducer from './reducers/logoReducer.js'
import itemReducer from './reducers/itemReducer.js'

const allReducers = combineReducers({
  items: itemReducer,
  logo: logoReducer
});

const store = createStore(
  allReducers, 
  {
    items: ['Help', 'Services', 'About'],
    logo: "https://s3-us-west-1.amazonaws.com/prkr-img/temp-logo.png",
    prof: "https://s3-us-west-1.amazonaws.com/prkr-img/blank-profile-picture-973460_960_720.png"
  },
  window.devToolsExtension && window.devToolsExtension()
  
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)

