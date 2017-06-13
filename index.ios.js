import React, { Component } from 'react';

import {
  AppRegistry,
  Text
} from 'react-native';
import HomeNavigationTab from './js/components/HomeNavigationTab';
import PictureList from './js/components/PictureList';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import Router from './js/navigation/router';

export default class cdart extends Component {
  render() {
    return (
<<<<<<< HEAD
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('navigation')} />
      </NavigationProvider>
=======
        // <Text>Hello</Text>
        <PictureList />
>>>>>>> updated pictureList
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
