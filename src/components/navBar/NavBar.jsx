import React from 'react';
import { connect } from 'react-redux';
import NavBarItem from './navBarItem/NavBarItem.jsx';
import NavBarLogo from './navBarLogo/NavBarLogo.jsx';
import NavBarProf from './navBarProf/NavBarProf.jsx';
import NavBarStyle from './NavBar.style.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // navbar items listed in reverse order
    return(
      <NavBarStyle>
        <NavBarProf prof={this.props.prof}></NavBarProf>
        {this.props.items.map((item) => 
          <NavBarItem item={item}/>
        )}
        <NavBarLogo logo={this.props.prof}></NavBarLogo>
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