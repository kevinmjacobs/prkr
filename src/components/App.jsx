import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './home/Home.jsx'
import About from './about/About.jsx';
import NavBar from './navBar/NavBar.jsx';
import AppStyle from './App.style.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <AppStyle>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </AppStyle>
      </Router>
    )
  }
}

export default App;