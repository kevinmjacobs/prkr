import React from 'react';

import { ResultDiv } from './SearchResult.style.js';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      address: props.address,
      lat: props.lat,
      long: props.long
    }
  }
  
  render() {
    return(
      <ResultDiv>{this.state.address}</ResultDiv>
    )
  }
}