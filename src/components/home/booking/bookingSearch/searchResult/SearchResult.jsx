import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      result: props.result
    }
  }
  
  render() {
    return(
      <div>{this.state.result}</div>
    )
  }
}