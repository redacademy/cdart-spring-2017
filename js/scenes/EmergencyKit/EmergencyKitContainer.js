import React, { Component } from 'react';
import { ListView } from 'react-native';

import EmergencyKit from './EmergencyKit'

class EmergencyKitContainer extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(kitCheckList),
    };
  }

  render(){
    return (
      <EmergencyKit dataSource={this.state.dataSource} />
    )
  }
}

const kitCheckList = [
  'Pet food for 1 week',
  'Carrier',
  'Collar/ID Tags',
  'Leash',
  'Bottled Water',
  'Medication',
  'Litter and litter box',
  'Recent photos of your pet',
  'Can opener',
]

export default EmergencyKitContainer