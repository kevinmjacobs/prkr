import React from 'react';

import { MoreInfo, ResultDiv, ResultName, ResultAddress, ResultDistance } from './SearchResult.style.js';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      id: props.id,
      name: props.name,
      address: props.address,
      distance: props.distance
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      name: nextProps.name,
      address: nextProps.address,
      distance: nextProps.distance
    });
  }
  
  render() {
    return(
      <ResultDiv>
        <div>
          <ResultName>{this.state.name}</ResultName>
          <ResultDistance>{this.state.distance} mi.</ResultDistance>
        </div>
        <ResultAddress>{this.state.address}</ResultAddress>
        <MoreInfo>&#9662;</MoreInfo>
      </ResultDiv>
    )
  }
}