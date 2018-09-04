import styled from 'styled-components';

export const LoginForm = styled.form`
  display: inline-block;
  width: 400px;
  text-align: center;
`;

export const LoginEmail = styled.input`
  display: block;
  margin: 10px auto;
  &::-webkit-input-placeholder {
    color: #783ac4;
    opacity: 0.5;
  }
`;

export const LoginPassword = styled.input`
  display: block;
  margin: 10px auto;
  &::-webkit-input-placeholder {
    color: #783ac4;
    opacity: 0.5;
  }
`;

export const SubmitLogin = styled.input`
  display: block;
  margin: 10px auto;
  color: #783ac4;
`;