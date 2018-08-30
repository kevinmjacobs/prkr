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

export const MoreInfo = styled.div`
  opacity: 0;
  text-align: center;
  height: 0px;
  -webkit-transition: height 0.25s linear, opacity 0.25s linear;
  -moz-transition: height 0.25s linear, opacity 0.25s linear;
  -ms-transition: height 0.25s linear, opacity 0.25s linear;
  -o-transition: height 0.25s linear, opacity 0.25s linear;
  transition: height 0.25s linear, opacity 0.25s linear;
  ${ResultDiv}:hover & {
    opacity: 1;
    height: 12px;
    -webkit-transition: height 0.25s linear, opacity 0.25s linear;
    -moz-transition: height 0.25s linear, opacity 0.25s linear;
    -ms-transition: height 0.25s linear, opacity 0.25s linear;
    -o-transition: height 0.25s linear, opacity 0.25s linear;
    transition: height 0.25s linear, opacity 0.25s linear;
  }

`