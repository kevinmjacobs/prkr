import React from 'react';

import BookingSearch from './bookingSearch/BookingSearch.jsx';

import { BookingHeader, BookingMain } from './Booking.style.js';

class Booking extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <BookingMain>
        <BookingHeader>Header</BookingHeader>
        <BookingSearch />
      </BookingMain>
    )
  }
}

export default Booking;