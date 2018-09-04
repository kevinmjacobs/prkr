import React from 'react'
import { LoginEmail, LoginForm, LoginPassword, SubmitLogin } from './Login.style.js';


export const Login = () => (
  <LoginForm>
    <LoginEmail type="text" placeholder="Email"/>
    <LoginPassword type="text" placeholder="Password"/>
    <SubmitLogin type="submit" value="Submit" />
  </LoginForm>
);