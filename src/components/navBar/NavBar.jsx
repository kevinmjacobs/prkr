import React from 'react';
import NavBarItem from '../navBarItem/NavBarItem.jsx';
import NavBarStyle from './NavBar.style.js';

export default class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      // navbar items listed in reverse order
      return(
        <NavBarStyle>
          <NavBarItem item={"Help"}/>
          <NavBarItem item={"Products"}/>
          <NavBarItem item={"About"}/>
        </NavBarStyle>
      )
    }
    
  }