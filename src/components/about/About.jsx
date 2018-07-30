import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { AboutH1, AboutH3 } from './About.style.js';

let description = loremIpsum({
  count: 5,
  units: 'words',
});

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AboutH1>About</AboutH1>
        <AboutH3>{description}</AboutH3>
      </div>
    )
  }
}

export default About;