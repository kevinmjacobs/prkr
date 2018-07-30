import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { HelpH1, HelpH3 } from './Help.style.js';

let description = loremIpsum({
  count: 5,
  units: 'words',
});

class Help extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <HelpH1>Help</HelpH1>
        <HelpH3>{description}</HelpH3>
      </div>
    )
  }
}

export default Help;