import React, { Component } from 'react';

import PetProfile from './PetProfile';

class PetProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Pet Profile',
    }
  }

  createProfile(){
    console.log('created');
  }

  render() {
    return (
      <PetProfile createProfile={this.createProfile} />
    );
  }
}

export default PetProfileContainer;