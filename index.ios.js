import React, { Component } from 'react';

import {
  AppRegistry,
  Text
} from 'react-native';

<<<<<<< HEAD
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import Router from './js/navigation/router';
=======
import OnboardingContainer from './js/scenes/Onboarding';
>>>>>>> add onboarding scenes

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
        <OnboardingContainer />
>>>>>>> add onboarding scenes
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
