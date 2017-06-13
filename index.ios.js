import React, { Component } from 'react';

import {
  AppRegistry,
  Text
} from 'react-native';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import Router from './js/navigation/router';
import EmergencyKit from './js/scenes/EmergencyKit'

export default class cdart extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <EmergencyKit />
        <StatusBar barStyle="light-content" />

      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
