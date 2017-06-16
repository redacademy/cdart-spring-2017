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

const whichIcon = (icon) => {
  switch(icon){
    case 'mission':
      return require('../../../assets/icons/mission_icon.png');
    case 'course':
      return require('../../../assets/icons/take_course_icon.png');
    case 'volunteer':
      return require('../../../assets/icons/red_getinvolved_icon.png');
    case 'donate':
      return require('../../../assets/icons/donate_icon.png');
    case 'rate':
      return require('../../../assets/icons/rate_app_icon.png');
    default:
      return ;
  }
}

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
            source={whichIcon(list.icon)}
            style={{width: 30, height: 30, marginLeft: 8, resizeMode: 'contain'}}
          />
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
