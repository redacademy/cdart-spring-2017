import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions } from 'react-native';
import { styles } from './styles';

import GetInvolvedListItem from '../GetInvolvedListItem';

var { height, width } = Dimensions.get('window');

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
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/73/91/86/7391863170be07a072ffeb3e7605db2a.jpg'}}
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
