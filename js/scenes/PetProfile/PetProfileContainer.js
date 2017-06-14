import React, { Component } from 'react';

import PetProfile from './PetProfile';

class PetProfileContainer extends Component {

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