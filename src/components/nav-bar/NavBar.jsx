import React from 'react';
import NavBarStyle from './NavBar.style.js';

export default class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return(
        <NavBarStyle>
          Here is the nav bar
        </NavBarStyle>
      )
    }
    
  }