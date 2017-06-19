import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import ListItem from '../../components/ListItem/ListItem';

class CheckListTemplate extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data.subsection),
    };
  }
  render(){
    return (
      <View>
        <View style={styles.greyTop} >
          <Text style={styles.greyTopText} >
            {this.props.data.subsectionText}
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
  dataSource: PropTypes.object,
  data: PropTypes.object,
}
export default CheckListTemplate;
