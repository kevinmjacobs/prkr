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
          <img src="https://s3-us-west-1.amazonaws.com/prkr-img/blank-profile-picture-973460_960_720.png"></img>
          <NavBarItem item={"Help"}/>
          <NavBarItem item={"Products"}/>
          <NavBarItem item={"About"}/>
        </NavBarStyle>
      )
    }
    
  }