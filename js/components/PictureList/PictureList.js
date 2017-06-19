import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, ListView, Dimensions, ScrollView } from 'react-native';
import { styles } from './styles';

import PictureListItem from '../PictureListItem';

let { height, width } = Dimensions.get('window');

const whichPicture = (title) => {
  switch(title){
    case 'checklists':
      return require('../../assets/images/volunteer_checklist.png');
    case 'procedures':
      return require('../../assets/images/procedures.png');
    case 'forms':
      return require('../../assets/images/forms.png');
    default:
      return ;
  }
}

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
        <Image source={whichPicture(this.props.title)}
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

PictureList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  currentNavigatorUID: PropTypes.string
};

export default PictureList;

