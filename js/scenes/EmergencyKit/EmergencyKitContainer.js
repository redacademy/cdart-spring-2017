import React, { Component } from 'react';
import { ListView } from 'react-native';

import { removeFromNavStack } from '../../lib/navigationHelpers';

import EmergencyKit from './EmergencyKit'
import { petEmergencyKit } from '../../assets/data'

const navigatorUID = 'home';
const targetRoute = 'emergencyKit';

class EmergencyKitContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Pet Emergency Kit'
    }
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(petEmergencyKit),
    };
  }

  render(){
    return (
      <EmergencyKit dataSource={this.state.dataSource} />
    )
  }
}

export default EmergencyKitContainer
