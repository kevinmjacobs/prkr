import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainDiv, LoginTab, SignupTab} from './Login.style.js';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <MainDiv>
        <LoginTab>Login</LoginTab>
        <SignupTab>Signup</SignupTab>
        <div>
          Here is some text
        </div>
        <Router>
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
        </Router>
      </MainDiv>
    )
  }
}

export default Login;