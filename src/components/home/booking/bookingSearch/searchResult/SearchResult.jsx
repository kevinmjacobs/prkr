import React from 'react';

import { ResultDiv } from './SearchResult.style.js';

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
      <ResultDiv>{this.state.name} {this.state.address} {this.state.distance}</ResultDiv>
    )
  }
}