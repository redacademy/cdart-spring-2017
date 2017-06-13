import React, { Component } from 'react';
import {
  AppRegistry,
  Text, View
} from 'react-native';
import HomeNavigationTab from './js/components/HomeNavigationTab';

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
        <HomeNavigationTab title="some stuff"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
