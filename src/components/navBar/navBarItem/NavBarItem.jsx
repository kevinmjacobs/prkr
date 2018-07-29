import React from 'react';
import { NavBarItemDiv, NavBarItemLink } from './NavBarItem.style';

const NavBarItem = (props) => {
  return (
    <NavBarItemDiv>
      <NavBarItemLink href="#">{props.item}</NavBarItemLink>
    </NavBarItemDiv>
  )
}

export default NavBarItem;