import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { ServicesH1, ServicesH3 } from './Services.style.js';

let description = loremIpsum({
  count: 5,
  units: 'words',
});

class Services extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <ServicesH1>Services</ServicesH1>
        <ServicesH3>{description}</ServicesH3>
      </div>
    )
  }
}

export default Services;