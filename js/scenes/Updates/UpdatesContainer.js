import React, { Component } from 'react';

import Updates from './Updates';
import IncidentContainer from '../IncidentCommand/IncidentContainer'

class UpdatesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }

  render() {
    return (
      <IncidentContainer />
    );
  }
}

export default UpdatesContainer;