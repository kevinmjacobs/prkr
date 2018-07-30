import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './about/About.jsx';
import Home from './home/Home.jsx'
import NavBar from './navBar/NavBar.jsx';

import AppStyle from './App.style.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <AppStyle>
          <NavBar />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
        </AppStyle>
      </Router>
    )
  }
}

export default App;