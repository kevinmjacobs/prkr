import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import About from '../../about/About.jsx';

import { NavBarItemDiv, NavBarItemLink } from './NavBarItem.style';

const NavBarItem = (props) => {
  return (
    <NavBarItemDiv>
      {/* <NavBarItemLink href={(props.item).toLowerCase()}>{props.item}</NavBarItemLink> */}
      <Link to={"/"+props.item.toLowerCase()}>{props.item}</Link>
    </NavBarItemDiv>
  )
}

export default NavBarItem;