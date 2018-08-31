import React from 'react';
import { HelpH1, HelpH3 } from './Help.style.js';

class Help extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <HelpH1>Help</HelpH1>
        <HelpH3>Description</HelpH3>
      </div>
    )
  }
}

export default Help;