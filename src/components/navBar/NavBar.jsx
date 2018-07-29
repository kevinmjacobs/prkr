import React from 'react';
import { connect } from 'react-redux';

import NavBarStyle from './NavBar.style.js';
import NavBarItem from '../navBarItem/NavBarItem.jsx';
import NavBarLogo from '../navBarLogo/NavBarLogo.jsx';
import NavBarProf from '../navBarProf/NavBarProf.jsx';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // navbar items listed in reverse order
    return(
      <NavBarStyle>
        <NavBarProf></NavBarProf>
        {this.props.items.map((item) => 
          <NavBarItem item={item}/>
        )}
        <NavBarLogo></NavBarLogo>
      </NavBarStyle>
    )
  } 
}

const mapStateToProps = state => ({
  items: state.items,
  logo: state.logo,
  prof: state.prof
});

export default connect(mapStateToProps)(NavBar);