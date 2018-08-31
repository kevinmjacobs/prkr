import React from 'react';
import Booking from './booking/Booking.jsx';
import { HomeH1, HomeH3 } from './Home.style.js';

const HomeSummary = () => {
  return(
    <div>
      <HomeH1>Home Header</HomeH1>
      <HomeH3>Description</HomeH3>
      <Booking />
    </div>
  )
}

export default HomeSummary;