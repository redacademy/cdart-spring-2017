import React, { Component } from 'react';
import { Text } from 'react-native';

import PetProfile from './PetProfile';

class PetProfileContainer extends Component {

  constructor(){
    super();
    this.state = {
      mockDog: {
        name: 'Bert',
        breed: 'husky',
        picture: require('../../../ios/cdart/Images.xcassets/AppIcon.appiconset/Icon-40.png')
      },
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

  render() {
    return (
      <PetProfile createProfile={this.createProfile} myDogs={[this.state.mockDog]} />
    );
  }
}

export default PetProfileContainer;