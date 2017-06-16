import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from './styles';
import { goToCheckListPage } from '../../lib/navigationHelpers';

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
        <Image source={{uri: 'https://i.ytimg.com/vi/R3Lhzw3DNaU/maxresdefault.jpg'}}
        style={{width: width, height: 200}} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableHighlight
              onPress={() => goToCheckListPage(this.props.currentNavigatorUID, this.props.list)}
              underlayColor="#999999"
              style={styles.container}
            >
              <View style={styles.singleItem}>
                <Text style={styles.textList}>{rowData}</Text>
                <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
                style={{width: 25, height: 25, marginRight: 8}} />
              </View>
            </TouchableHighlight>
          )}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          style={styles.list}
        />
      </ScrollView>
    );
  }
}

export default PictureList;

