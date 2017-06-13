import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import HomeNavigationTab from './js/components/HomeNavigationTab';

export default class cdart extends Component {
  render() {
    return (
        <Text>Hello</Text>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
