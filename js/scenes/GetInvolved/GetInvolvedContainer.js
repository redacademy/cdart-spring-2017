import React, { Component } from 'react';

import GetInvolved from './GetInvolved';

class GetInvolvedContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Get Involved',
    }
  }

  render() {
    return (
      <GetInvolved />
    );
  }
}

export default GetInvolvedContainer;
