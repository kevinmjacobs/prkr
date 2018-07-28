import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { combineReducers, createStore } from 'redux';

const itemReducer = (state = [], action) => {
  return state;
}

const logoReducer = (state = '', action) => {
  return state;
}

const allReducers = combineReducers({
  items: itemReducer,
  logo: logoReducer
});

const store = createStore(allReducers, {
  items: ['Help', 'Services', 'About'],
  logo: "https://s3-us-west-1.amazonaws.com/prkr-img/temp-logo.png"
});

console.log(store.getState());

render(
  <App />,
  document.getElementById("app")
)

