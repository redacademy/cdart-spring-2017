import React, { Component } from 'react';

import GetInvolved from './GetInvolved';
import { getInvolved } from '../../assets/data';

class GetInvolvedContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Get Involved',
    }
  }

  render() {
    console.log(getInvolved);
    return (
      <GetInvolved list={getInvolved} />
    );
  }
}

export default GetInvolvedContainer;
