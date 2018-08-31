import React from 'react';
import { Link } from "react-router-dom"; 
import About from '../../about/About.jsx';
import Help from '../../help/Help.jsx';
import Home from '../../home/Home.jsx';
import Services from '../../services/Services.jsx';
import { NavBarItemDiv } from './NavBarItem.style';

const NavBarItem = (props) => {
  if (props.item === 'Home') {
    return(
      <Link to="/">
        <NavBarItemDiv>{props.item}</NavBarItemDiv>
      </Link>
    )
  } else {
    return (
      <Link to={"/"+props.item.toLowerCase()}>
        <NavBarItemDiv>{props.item}</NavBarItemDiv>
      </Link>
    )
  }
}

export default NavBarItem;