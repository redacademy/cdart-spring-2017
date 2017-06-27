import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import { goToSubpage } from '../../lib/navigationHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';
const PictureListItem = ({ rowData, currentNavigatorUID }) => {
  return (
    <TouchableHighlight
      onPress={() => goToSubpage( rowData.targetRoute, currentNavigatorUID, rowData )}
      underlayColor="#999999"
      style={styles.container}
    >
      <View style={styles.singleItem}>
        <Text style={styles.textList}>{rowData.title}</Text>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
          size={32}
          color={colors.blue}
          style={styles.icon}
        />
      </View>
    </TouchableHighlight>
  )};

  PictureListItem.propTypes = {
  list: PropTypes.array,
  currentNavigatorUID: PropTypes.string,
  rowData: PropTypes.object
};
export default PictureListItem;
