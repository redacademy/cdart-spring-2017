import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

import { styles } from './styles';

class CheckListTemplate extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.infoData.subsection),
    };
  }
  render(){
    return (
      <View>
        <View style={styles.greyTop} >
          <Text style={styles.greyTopText} >
            {this.props.infoData.subsectionText}
          </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item, i) => {
            return <ListItem item={item} key={item + i} />
          }}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    )
  }
}
CheckListTemplate.propTypes = {
  dataSource: PropTypes.object
}
export default CheckListTemplate;
