import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import logoReducer from './reducers/logoReducer.js'
import itemReducer from './reducers/itemReducer.js'
import App from './components/App.jsx';
import LoginPortal from './components/loginPortal/LoginPortal.jsx';

const allReducers = combineReducers({
  items: itemReducer,
  logo: logoReducer
});

const store = createStore(
  allReducers, 
  {
    items: ['Help', 'Services', 'About', 'Home'],
    logo: "https://s3-us-west-1.amazonaws.com/prkr-img/temp-logo.png",
    prof: "https://s3-us-west-1.amazonaws.com/prkr-img/blank-profile-picture-973460_960_720.png"
  },
  window.devToolsExtension && window.devToolsExtension()
  
);

render(
  <Provider store={store}>
    {/* <App /> */}
    <LoginPortal />
  </Provider>,
  document.getElementById("app")
)

