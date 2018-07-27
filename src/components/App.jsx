import React from 'react';
import NavBar from './nav-bar/NavBar.jsx';
import AppStyle from './App.style.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <AppStyle>
        <NavBar />
      </AppStyle>
    )
  }

}