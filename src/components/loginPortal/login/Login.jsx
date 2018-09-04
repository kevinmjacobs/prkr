import React from 'react'
import { LoginUser, LoginForm, LoginPassword, SubmitLogin } from './Login.style.js';


export const Login = () => (
  <LoginForm>
    <LoginUser type="text" placeholder="Username"/>
    <LoginPassword type="text" placeholder="Password"/>
    <SubmitLogin type="submit" value="Submit" />
  </LoginForm>
);