import React from 'react';

import { BookingHeader, BookingMain } from './Booking.style.js';

class Booking extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <BookingMain>
        <BookingHeader>Book a space!</BookingHeader>
      </BookingMain>
    )
  }
}

export default Booking;