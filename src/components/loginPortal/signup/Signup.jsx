import React from 'react'
import { findDOMNode } from 'react-dom';
import { SignupForm, SignupEmail, SignupPassword, SubmitSignup } from './Signup.style.js';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rePassword: ''
    }
    this.submitSignupForm = this.submitSignupForm.bind(this);
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitSignupForm(e) {
    if (this.state.password !== this.state.rePassword) {
      this.setState({
        password: '',
        rePassword: ''
      }, () => {
        findDOMNode(this.refs.password).value = "";
        findDOMNode(this.refs.rePassword).value = "";
        window.alert("Passwords do not match - try again");
      })
    }
  }

  render() {
    return(
      <SignupForm onSubmit={e => { e.preventDefault(); }}>
        <SignupEmail type="text" name='email' placeholder="Email" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SignupPassword type="password" name='password' ref="password" placeholder="Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SignupPassword type="password" name='rePassword' ref="rePassword" placeholder="Re-Enter Password" onKeyUp={ (e) => { this.inputChange(e) } }/>
        <SubmitSignup type="submit" value="Sign Up" onClick={ (e) => {  this.submitSignupForm(e) } } />
      </SignupForm>
    )
  }
}


