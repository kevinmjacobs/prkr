import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MainDiv, LoginTab, SignupTab} from './Login.style.js';

class LoginPortal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <MainDiv>
          <LoginTab>
            <Link to="/">Login</Link>
          </LoginTab>
          <SignupTab>
            <Link to="/signup">Signup</Link>
          </SignupTab>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </MainDiv>
      </Router>
    )
  }
}

const Login = () => (
  <div>
    Login
  </div>
);

const Signup = () => (
  <div>
    Signup
  </div>
);


export default LoginPortal;