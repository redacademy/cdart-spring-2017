import React, { Component } from 'react';
import { ListView } from 'react-native';

import EmergencyKit from './EmergencyKit'
import { petEmergencyKit } from '../../assets/data'

class EmergencyKitContainer extends Component {

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