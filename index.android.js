import React, { Component } from 'react';

import {
  AppRegistry,
  Text
} from 'react-native';
import HomeNavigationTab from './js/components/HomeNavigationTab';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';

import { StatusBar } from 'react-native';

import Router from './js/navigation/router';
import Store from './js/redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class cdart extends Component {
  render() {
    return (
      <NavigationProvider router={Router} context={navigationContext}>
        <StatusBar barStyle="light-content" />
        <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('navigation')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
