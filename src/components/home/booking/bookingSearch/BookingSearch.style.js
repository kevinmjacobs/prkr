import styled from 'styled-components';

export const SearchInput = styled.input`
  color: #783ac4;
  border: 2px solid #783ac4;
  font-size: 1em;
  width: 350px;
  margin: 1em;
  border-radius: 3px;
  outline: none;
  &::-webkit-input-placeholder {
    color: #783ac4;
    opacity: 0.5;
  }
`;

export const SearchBar = styled.div`
  display: inline-block;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: 0;
`;

