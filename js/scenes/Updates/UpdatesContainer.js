import React, { Component } from 'react';

import Updates from './Updates';
import VolunteerPackingChecklist from '../VolunteerPacking/VolunteerPackingContainer';

class UpdatesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }

  render() {
    return (
      <VolunteerPackingChecklist />
    );
  }
}

export default UpdatesContainer;