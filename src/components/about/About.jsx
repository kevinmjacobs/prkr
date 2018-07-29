import React from 'react';
import { AboutHeader } from './About.style.js';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AboutHeader>
          About
        </AboutHeader>
      </div>
    )
  }
}

export default About;