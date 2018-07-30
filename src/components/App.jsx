import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './about/About.jsx';
import Help from './help/Help.jsx';
import Home from './home/Home.jsx'
import Services from './services/Services.jsx'
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
          <Route exact path="/about" component={About} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/services" component={Services} />
        </AppStyle>
      </Router>
    )
  }
}

export default App;