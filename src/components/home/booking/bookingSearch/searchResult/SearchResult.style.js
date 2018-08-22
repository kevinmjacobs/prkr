import styled from 'styled-components';

export const ResultDiv = styled.div`
  text-align: left;
  padding: 8px;
  width: 100%;
  &:hover {
    background: #e7def2;
  }

`;

export const ResultName = styled.span`
  display: inline;
  font-size: 22px;
`;

export const ResultAddress = styled.div`
  font-size: 12px;
`;

export const ResultDistance = styled.span`
  display: inline;
  float: right;
  font-size: 22px;
`;