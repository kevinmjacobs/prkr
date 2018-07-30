import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

import About from '../../about/About.jsx';
import Help from '../../help/Help.jsx';
import Home from '../../home/Home.jsx';
import Services from '../../services/Services.jsx';

import { NavBarItemDiv, NavBarItemLink } from './NavBarItem.style';

const NavBarItem = (props) => {
  console.log(props.item)
  if (props.item === 'Home') {
    return(
      <NavBarItemDiv>
        <Link to="/">{props.item}</Link>
      </NavBarItemDiv>
    )
  } else {
    return (
      <NavBarItemDiv>
        <Link to={"/"+props.item.toLowerCase()}>{props.item}</Link>
      </NavBarItemDiv>
    )
  }
}

export default NavBarItem;