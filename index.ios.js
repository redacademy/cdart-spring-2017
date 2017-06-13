import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import Router from './js/navigation/router';

import Home from './js/scenes/Home';

export default class cdart extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('navigation')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
