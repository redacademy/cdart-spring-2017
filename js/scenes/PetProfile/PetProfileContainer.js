import React, { Component } from 'react';
import { Text } from 'react-native';

import { clearNavStack } from '../../lib/navigationHelpers';

import PetProfile from './PetProfile';

class PetProfileContainer extends Component {

  constructor(){
    super();
    this.state = {
      mockDog: [{
        name: 'Bert',
        breed: 'husky',
        picture: require('../../assets/icons/check.png')
      },
      {
        name: 'Ernie',
        breed: 'Shepard/Husky',
        picture: require('../../assets/icons/check.png')
      }],
      myDogs: []
    }
  }
  static route = {
    navigationBar: {
      title: 'Pet Profile',
    }
  }

  createProfile(myDogs){
    console.log(myDogs);
  }

  componentWillUpdate() {
    clearNavStack();
  }

  render() {
    return (
      <PetProfile
        createProfile={this.createProfile}
        myDogs={[]}
        currentNavigatorUID="petProfile" />
    );
  }
}

export default PetProfileContainer;
