import React from 'react';
import { ServicesH1, ServicesH3 } from './Services.style.js';

class Services extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <ServicesH1>Services</ServicesH1>
        <ServicesH3>Description</ServicesH3>
      </div>
    )
  }
}

export default Services;