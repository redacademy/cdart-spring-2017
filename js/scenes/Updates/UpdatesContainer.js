import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';
import Updates from './Updates';

class UpdatesContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

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