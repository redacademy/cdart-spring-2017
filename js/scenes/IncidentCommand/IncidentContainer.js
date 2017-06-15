import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import Incident from './Incident';

import { styles } from './styles';

const incidentList = [
  'Command',
  'Operations',
  'Logistics',
  'Planning',
  'Finance'
]

class IncidentContainer extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(incidentList),
    }
  }

  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData, i) => (
          <Incident rowData={rowData} key={i} />
        )}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        style={styles.list}
      />
    )
  }
}

export default IncidentContainer;
