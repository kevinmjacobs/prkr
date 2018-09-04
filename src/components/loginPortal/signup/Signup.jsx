import React from 'react'
import { SignupForm, SignupEmail, SignupPassword, SubmitSignup } from './Signup.style.js';

export const Signup = () => (
  <SignupForm>
    <SignupEmail type="text" placeholder="Email"/>
    <SignupPassword type="text" placeholder="Password"/>
    <SignupPassword type="text" placeholder="Re-Enter Password"/>
    <SubmitSignup type="submit" value="Sign Up" />
  </SignupForm>
);
