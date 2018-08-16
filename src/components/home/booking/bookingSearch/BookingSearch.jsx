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
      results: [
        ['99 5th Ave #33, Trion, GA 30753', '34.547033', '-85.3075825999999'],
        ['987 Main St, Raleigh, NC 27601 ', '35.7765175', '-78.6359872'],
        ['98839 Hawthorne Blvd #6101, Columbia, SC 29201', '33.9873389', '-81.0368211'],
        ['985 E 6th Ave, Santa Rosa, CA 95407', '38.3986068', '-122.7520139'],
        ['98 University Dr, San Ramon, CA 30753', '37.7624642', '-121.9814354']
      ]
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
    .then(res => console.log(res))
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
          {this.state.results.map((result) => 
            <SearchResult address={result[0]} lat={result[1]} long={result[2]}/>
          )}
        </div>
      </div>
    )
  }

}