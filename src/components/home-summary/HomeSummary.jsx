import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { HomeSummaryH1, HomeSummaryH3 } from './HomeSummary.style.js';

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
      <HomeSummaryH1>{summary}</HomeSummaryH1>
      <HomeSummaryH3>{description}</HomeSummaryH3>
    </div>
  )
}

export default HomeSummary;