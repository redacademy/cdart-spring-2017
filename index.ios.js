import React, { Component } from 'react';
<<<<<<< HEAD

=======
>>>>>>> Rough out home screen component.
import {
  AppRegistry,
  Text, View
} from 'react-native';
<<<<<<< HEAD
=======
import HomeNavigationTab from './js/components/HomeNavigationTab';
>>>>>>> Rough out home screen component.

import Home from './js/scenes/Home';

export default class cdart extends Component {
  render() {
    var styles = {
      container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      }
    }
    return (
      <View style={styles.container}>
        <HomeNavigationTab title="pet profiles"/>
        <HomeNavigationTab title="some shit"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
