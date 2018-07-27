import React from 'react';
import NavBar from './nav-bar/NavBar.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>
        <NavBar />
      </div>
    )
  }

}