import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToCheckListPage } from '../../lib/navigationHelpers';

import { styles } from './styles';

const PictureListItem = ({list, currentNavigatorUID}) => {
  return (
    <TouchableHighlight
      onPress={() => goToCheckListPage( currentNavigatorUID, list)}
      underlayColor="#999999"
      style={styles.container}
    >
      <View style={styles.singleItem}>
        <Text style={styles.textList}>{list.title}</Text>
        <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
        style={{width: 25, height: 25, marginRight: 8}} />
      </View>
    </TouchableHighlight>
  )};

  PictureListItem.propTypes = {
  list: PropTypes.object,
  currentNavigatorUID: PropTypes.string,
};
export default PictureListItem;
