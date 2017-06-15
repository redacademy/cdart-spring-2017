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

import { goToInfoPage } from '../../../lib/navigationHelpers';

import { styles } from './styles';

import { colors } from '../../../config/styles';

const GetInvolvedListItem = ({list, currentNavigatorUID}) => {
  return (
    <TouchableHighlight
    onPress={() => goToInfoPage(currentNavigatorUID, list)}
    underlayColor={colors.grey}
    style={styles.container}
    >
      <View style={styles.singleItem}>
        <View style={styles.title}>
          <Image
            source={{ uri: list.icon }}
            style={{width: 35, height: 35, marginLeft: 8}} />
          <Text style={styles.textList}>{list.title}</Text>
        </View>
        <Icon
          name={
            Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
          }
          size={32}
          color={colors.grey}
          style={{width: 25, height: 25, marginRight: 8}}
        />
      </View>
    </TouchableHighlight>
  )};

  GetInvolvedListItem.propTypes = {
  list: PropTypes.object,
  currentNavigatorUID: PropTypes.string,
};
export default GetInvolvedListItem;
