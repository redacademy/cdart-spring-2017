import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';
import GetInvolved from './GetInvolved';

class GetInvolvedContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

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