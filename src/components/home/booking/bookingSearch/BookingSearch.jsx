import React from 'react';

export default class BookingSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchEntry: ''
    }
  }

  updateSearchEntry(e) {
    this.setState({
      searchEntry: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input 
          placeholder="Enter location"
          onKeyUp={(e) => {this.updateSearchEntry(e)}}
        />
      </div>
    )
  }

}