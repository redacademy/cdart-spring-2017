import React, { Component } from 'react';

import Updates from './Updates';

class UpdatesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }

  render() {
    return (
      <Updates />
    );
  }
}

export default UpdatesContainer;