import React from 'react';

import SearchResult from './searchResult/SearchResult.jsx';

import { SearchBar, SearchButton, SearchInput } from './BookingSearch.style.js';

import { GEOCODE_API_KEY } from '../../../../../config/config.js';

export default class BookingSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: '',
      lat: undefined,
      lng: undefined,
      results: [],
      resultCount: 10
    }
    this.geocodeSearch = this.geocodeSearch.bind(this);
    this.generateSearchResults = this.generateSearchResults.bind(this);
  }

  updateSearchEntry(e) {
    this.setState({
      entry: e.target.value
    })
  }

  geocodeSearch() {
    const address = this.state.entry.split(' ').join('+');
    fetch(`https://api.geocod.io/v1.3/geocode?q=${address}&api_key=${GEOCODE_API_KEY}`)
    .then(results => {
      return results.json();
    }).then(data => {
        this.setState({
          lat: data.results[0].location.lat,
          lng: data.results[0].location.lng
        }, this.generateSearchResults)
      })
  }

  generateSearchResults() {
    fetch(`/api/search?lat=${this.state.lat}&lng=${this.state.lng}`)
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(res => {this.setState({ 
      results: res  
    })});
  }

  render() {
    return(
      <div>
        <SearchBar>
          <SearchInput 
            placeholder="Enter location"
            onKeyUp={(e) => {this.updateSearchEntry(e)}}
          />
          <SearchButton onClick={(e) => this.geocodeSearch()}>Search</SearchButton>
        </SearchBar>
        <div>
          {this.state.results.map((result, index) => {
            if (index < this.state.resultCount) {
              return <SearchResult id={result[0]} name={result[1]} address={result[2]} distance={result[3]}/>
            }
          })}
        </div>
      </div>
    )
  }

}