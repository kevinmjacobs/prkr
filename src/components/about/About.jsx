import React from 'react';
import { AboutH1, AboutH3 } from './About.style.js';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AboutH1>About</AboutH1>
        <AboutH3>Description</AboutH3>
      </div>
    )
  }
}

export default About;