import React from 'react';
import HomeSummary from './home-summary/HomeSummary.jsx'
import About from './about/About.jsx';
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
        <HomeSummary />
        <About />
      </AppStyle>
    )
  }
}

export default App;