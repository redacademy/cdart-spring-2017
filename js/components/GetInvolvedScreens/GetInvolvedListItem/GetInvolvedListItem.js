import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import { goToInfoPage } from '../../../lib/navigationHelpers';

import { styles } from './styles';

const GetInvolvedListItem = ({list, currentNavigatorUID}) => {
  return (
    <TouchableHighlight
    onPress={() => goToInfoPage(currentNavigatorUID, list)}
    underlayColor="#999999"
    style={styles.container}
    >
      <View style={styles.singleItem}>
        <View style={styles.title}>
          <Image
            source={{ uri: list.icon }}
            style={{width: 35, height: 35, marginLeft: 8}} />
          <Text style={styles.textList}>{list.title}</Text>
        </View>
        <Image
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
          style={{width: 25, height: 25, marginRight: 8}} />
      </View>
    </TouchableHighlight>
  )};

  GetInvolvedListItem.propTypes = {
  list: PropTypes.object,
  currentNavigatorUID: PropTypes.string,
};
export default GetInvolvedListItem;
