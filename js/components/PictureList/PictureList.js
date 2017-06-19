import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from './styles';
import { goToCheckListPage } from '../../lib/navigationHelpers';
import PictureListItem from '../PictureListItem';

var { height, width } = Dimensions.get('window');

class PictureList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.list),
    }
  }
  render() {
    return (
      <ScrollView>
        <Image source={require('../../assets/images/volunteer_checklist.png')}
        style={{width: width, height: (height / 2.75)}} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <PictureListItem rowData={rowData} currentNavigatorUID={ this.props.currentNavigatorUID } />
          )}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          style={styles.list}
        />
      </ScrollView>
    );
  }
}

export default PictureList;

