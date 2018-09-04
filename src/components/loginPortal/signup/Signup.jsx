import React from 'react'
import { findDOMNode } from 'react-dom';
import axios from 'axios';
import { SignupForm, SignupEmail, SignupPassword, SubmitSignup } from './Signup.style.js';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rePassword: ''
    }
    this.clearSubmitForm = this.clearSubmitForm.bind(this);
    this.submitSignupForm = this.submitSignupForm.bind(this);
  }

  clearSubmitForm(message, resetEmail) {
    window.alert(message);
    this.setState({
      password: '',
      rePassword: ''
    }, () => {
      findDOMNode(this.refs.password).value = "";
      findDOMNode(this.refs.rePassword).value = "";
      if (resetEmail) {
        this.setState( { email: '' }, () => {
          findDOMNode(this.refs.email).value = "";
        })
      }
    })
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitSignupForm() {
    if (this.state.password !== this.state.rePassword) {
      this.clearSubmitForm("Passwords do not match - try again", false);
    } else {
      const body = { 
        email: this.state.email,
        password: this.state.password
      };
      axios.post('/api/signup', body)
        .then(data => {
          if (data.status === 204) {
            this.clearSubmitForm('Email already exists - please try another email', true);
          }
          if (data.status === 201) {
            window.alert('User successfully created - please login!');
            this.props.history.push('/login')
          }
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return(
      <SignupForm onSubmit={e => { e.preventDefault(); }}>
        <SignupEmail type="text" name='email' ref='email' placeholder="Email" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SignupPassword type="password" name='password' ref="password" placeholder="Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SignupPassword type="password" name='rePassword' ref="rePassword" placeholder="Re-Enter Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SubmitSignup type="submit" value="Sign Up" onClick={ () => {  this.submitSignupForm() } } />
      </SignupForm>
    )
  }
}


