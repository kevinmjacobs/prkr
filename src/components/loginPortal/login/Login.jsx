import React from 'react';
import axios from 'axios';
import { LoginEmail, LoginForm, LoginPassword, SubmitLogin } from './Login.style.js';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitLoginForm() {
    const config = { 
      params: {
        email: this.state.email,
        password: this.state.password
      }
    };
    axios.get('/api/login', config)
      .then( data => {
        console.log('GET /api/login successful, ', data);
      })
      .catch( err => {
        console.log('GET /api/login unsuccessful, ', err);
      })
  }

  render() {
    return (  
      <LoginForm onSubmit={ (e) => { e.preventDefault(); } }>
        <LoginEmail type="text" name="email" placeholder="Email" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <LoginPassword type="text" name="password" placeholder="Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SubmitLogin type="submit" value="Login" onClick={ () => { this.submitLoginForm() } }/>
      </LoginForm>
    )
  }
}

