import React, { Component } from 'react';
import {
  View,
  Image,
  ListView,
  Dimensions
} from 'react-native';

import { styles } from './styles';

import GetInvolvedListItem from '../GetInvolvedListItem';

var { width } = Dimensions.get('window');

const mainImage = require('../../../assets/images/get_involved.png');

class GetInvolvedList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.list),
    }
  }
  render() {
    return (
      <View>
        <Image source={mainImage}
        style={{width: width, height: 200}} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            if(rowData.title.length) {
              return (
                <GetInvolvedListItem
                  list={rowData}
                  currentNavigatorUID = "getInvolved"
                />
              )}
            return <View style={styles.blank} />;
          }}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          style={styles.list}
        />
      </View>
    );
  }
}

export default GetInvolvedList;
