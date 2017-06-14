import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import PetProfile from './js/scenes/PetProfile'

import Router from './js/navigation/router';

export default class cdart extends Component {
  render() {
    return (
      <PetProfile />
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
