import React from 'react';
import { LoginEmail, LoginForm, LoginPassword, SubmitLogin } from './Login.style.js';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (  
      <LoginForm>
        <LoginEmail type="text" name="email" placeholder="Email" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <LoginPassword type="text" name="password" placeholder="Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SubmitLogin type="submit" value="Login" />
      </LoginForm>
    )
  }
}

