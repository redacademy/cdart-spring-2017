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

const missionIcon = require('../../../assets/icons/mission_icon.png');
const courseIcon = require('../../../assets/icons/take_course_icon.png');
const volunteerIcon = require('../../../assets/icons/red_getinvolved_icon.png');
const donateIcon = require('../../../assets/icons/donate_icon.png');
const rateIcon = require('../../../assets/icons/rate_app_icon.png');
let icon = null;

const GetInvolvedListItem = ({list, currentNavigatorUID}) => {
  if(list.icon === 'mission') icon = missionIcon;
  if(list.icon === 'course') icon = courseIcon;
  if(list.icon === 'volunteer') icon = volunteerIcon;
  if(list.icon === 'donate') icon = donateIcon;
  if(list.icon === 'rate') icon = rateIcon;
  return (
    <TouchableHighlight
    onPress={() => goToInfoPage(currentNavigatorUID, list)}
    underlayColor={colors.grey}
    style={styles.container}
    >
      <View style={styles.singleItem}>
        <View style={styles.title}>
          <Image
            source={icon}
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
