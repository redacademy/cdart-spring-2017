import React, { Component } from 'react';

import { View, Text, Image, ListView, Dimensions } from 'react-native';
import { styles } from './styles';

var { height, width } = Dimensions.get('window');


class PictureList extends Component {
  constructor(){
    super();
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
          renderRow={(rowData) => (
            <View style={styles.singleItem}>
              <Text style={styles.textList}>{rowData}</Text>
              <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
        style={{width: 25, height: 25, marginRight: 8}} />
            </View>

            )}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          style={styles.list}
        />
      </View>
    );
  }
}

export default PictureList;

