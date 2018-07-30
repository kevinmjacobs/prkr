import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { HomeH1, HomeH3 } from './Home.style.js';

let description = loremIpsum({
  count: 5,
  units: 'words',
});

const HomeSummary = () => {
  return(
    <div>
      <HomeH1>Home</HomeH1>
      <HomeH3>{description}</HomeH3>
    </div>
  )
}

export default HomeSummary;