import React, { Component } from 'react';
import { ListView } from 'react-native';

import { receptionShelterSetup } from '../../assets/data';
import Reception from './Reception';

class ReceptionContainer extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(receptionShelterSetup),
    };
  }

  render(){
    return (
      <Reception dataSource={this.state.dataSource} />
    );
  }
}

export default ReceptionContainer;
