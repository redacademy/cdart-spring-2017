import React, { Component } from 'react';
import { ListView } from 'react-native';

import VolunteerPacking from './VolunteerPacking'
import { volunteerPackList } from '../../assets/data'

class VolunteerPackingContainer extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(volunteerPackList),
    };
  }

  render(){
    return (
      <VolunteerPacking dataSource={this.state.dataSource} />
    )
  }
}

export default VolunteerPackingContainer