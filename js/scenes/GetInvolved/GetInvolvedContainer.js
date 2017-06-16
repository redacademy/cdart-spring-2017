import React, { Component } from 'react';

import { clearNavStack } from '../../lib/navigationHelpers';

import GetInvolved from './GetInvolved';
import { getInvolved } from '../../assets/data';

class GetInvolvedContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Get Involved',
    }
  }

  componentDidMount() {
    clearNavStack();
  }

  render() {
    return (
      <GetInvolved list={getInvolved} />
    );
  }
}

export default GetInvolvedContainer;
