import React, { Component } from 'react';
import { Text } from 'react-native';

import { clearNavStack } from '../../lib/navigationHelpers';
import { queryPetProfiles } from '../../config/models';

import PetProfile from './PetProfile';

const petProfilesArray = queryPetProfiles();

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
      myDogs: [{
        name: 'Bert',
        breed: 'husky',
        picture: require('../../assets/icons/check.png')
      },
      {
        name: 'Ernie',
        breed: 'Shepard/Husky',
        picture: require('../../assets/icons/check.png')
      }]
    }
  }
  static route = {
    navigationBar: {
      title: 'Pet Profile',
    }
  }

  componentWillUpdate() {
    clearNavStack();
  }

  render() {
    return (
      <PetProfile
        createProfile={this.createProfile}
        myPets={petProfilesArray}
        currentNavigatorUID="petProfile" />
    );
  }
}

export default PetProfileContainer;
