import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import About from '../../about/About.jsx';
import Home from '../../home/Home.jsx';

import { NavBarItemDiv, NavBarItemLink } from './NavBarItem.style';

const NavBarItem = (props) => {
  console.log(props.item)
  if (props.item === 'Home') {
    return(
      <NavBarItemDiv>
        {/* <NavBarItemLink href={(props.item).toLowerCase()}>{props.item}</NavBarItemLink> */}
        <Link to="/">{props.item}</Link>
      </NavBarItemDiv>
    )
  } else {
    return (
      <NavBarItemDiv>
        {/* <NavBarItemLink href={(props.item).toLowerCase()}>{props.item}</NavBarItemLink> */}
        <Link to={"/"+props.item.toLowerCase()}>{props.item}</Link>
      </NavBarItemDiv>
    )
  }
}

export default NavBarItem;