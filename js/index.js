import React, { Component } from 'react';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';

import { StatusBar } from 'react-native';

import Router from './navigation/router';
import Store from './redux/store';
import { Provider } from 'react-redux';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class cdart extends Component {
  render() {
    return (
      <Provider store={Store} >
        <NavigationProvider router={Router} context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            initialRoute={Router.getRoute('onboarding')} />
        </NavigationProvider>
      </Provider>
    );
  }
}
