import React from 'react';
import NavBar from './navBar/NavBar.jsx';
import AppStyle from './App.style.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <AppStyle>
        <NavBar />
      </AppStyle>
    )
  }
}

export default App;