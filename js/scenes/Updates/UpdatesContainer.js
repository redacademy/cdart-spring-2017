import React, { Component } from 'react';

import { clearNavStack } from '../../lib/navigationHelpers';

import Updates from './Updates';

class UpdatesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }

  componentWillUpdate() {
    clearNavStack();
  }

  render() {
    return (
      <Updates />
    );
  }
}

export default UpdatesContainer;
