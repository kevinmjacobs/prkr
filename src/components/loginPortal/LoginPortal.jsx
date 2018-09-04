import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from "./login/Login.jsx";
import { Signup } from "./signup/Signup.jsx"
import { MainDiv, LoginTab, SignupTab } from './LoginPortal.style.js';

class LoginPortal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <MainDiv>
          <Link to="/">
            <LoginTab>Login</LoginTab>
          </Link>
          <Link to="/signup">
            <SignupTab>Signup</SignupTab>
          </Link>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </MainDiv>
      </Router>
    )
  }
}

export default LoginPortal;