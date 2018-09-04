import styled from 'styled-components';

export const SignupForm = styled.form`
  display: inline-block;
  width: 400px;
  text-align: center;
`;

export const SignupEmail = styled.input`
  display: block;
  margin: 10px auto;
  &::-webkit-input-placeholder {
    color: #783ac4;
    opacity: 0.5;
  }
`;

export const SignupPassword = styled.input`
  display: block;
  margin: 10px auto;
  &::-webkit-input-placeholder {
    color: #783ac4;
    opacity: 0.5;
  }
`;

export const SubmitSignup = styled.input`
  display: block;
  margin: 10px auto;
  color: #783ac4;
`;