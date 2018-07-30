import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { HomeH1, HomeH3 } from './Home.style.js';

const HomeSummary = () => {
  let summary = loremIpsum({
    count: 3,
    units: 'words'
  })
  let description = loremIpsum({
    count: 5,
    units: 'words',
  })
  return(
    <div>
      <HomeH1>{summary}</HomeH1>
      <HomeH3>{description}</HomeH3>
    </div>
  )
}

export default HomeSummary;