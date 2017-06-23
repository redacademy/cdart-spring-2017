import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ViewProfile from './ViewPetProfile.js';

const petInfo = {
  name: 'Peanut',
  age: 2,
  species: 'Canine',
  breed: 'Corgi',
  colour: 'Blonde',
  sex: 'Female',
  spayedOrNeutered: true,
  temperament: [
    {
      type: 'Friendly',
      selected: true,
    },
    {
      type: 'Energetic',
      selected: true
    },
    {
      type: 'Timid',
      selected: false
    },
    {
      type: 'Aggressive',
      selected: false
    },
    {
      type: 'Playful',
      selected: true
    }
  ],
  temperamentText: 'alsdjf;lkjsd;lfkja;lskdjf;lakjsd;lfkja;lskdjf;laksjdf;lkjas;dlkfja;lskdjf;alksjd;flkj',
  features: 'sdjaljsdlkfja;lksjdf;lkajs;ldkjf;alksjdflkjasldkjf;alkjsd;fkja;ksdjf;',
  careInstructions: ';lakjsdlfjalsjd;lkfja;lsjkdf;ajs;kdjf;akjsdlkfj;aksjdf;kja;skdjf;kajsdf',
  medicalAlerts: 'dlakjsdkjf ;ajksd;fkjalskdjf',
  profileImage: require( '../../assets/images/appicon.jpg' )
}

class ViewProfileContainer extends Component {

  render() {
    return(
      <ViewProfile petInfo={ petInfo } />
    );
  }
}

export default ViewProfileContainer;
