import React from 'react';
import NavBarStyle from './NavBar.style.js';
import NavBarItem from '../navBarItem/NavBarItem.jsx';
import NavBarLogo from '../navBarLogo/NavBarLogo.jsx';
import NavBarProf from '../navBarProf/NavBarProf.jsx';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // navbar items listed in reverse order
    return(
      <NavBarStyle>
        <NavBarProf></NavBarProf>
        <NavBarItem item={"Help"}/>
        <NavBarItem item={"Products"}/>
        <NavBarItem item={"About"}/>
        <NavBarLogo></NavBarLogo>
      </NavBarStyle>
    )
  } 
}