import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';
import PetProfile from './PetProfile';

class PetProfileContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Pet Profile',
    }
  }

  render() {
    return (
      <PetProfile />
    );
  }
}

export default PetProfileContainer;