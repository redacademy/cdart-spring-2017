import React from 'react';
import PropTypes from 'prop-types';

import { goToView } from '../../lib/navigationHelpers';
import LinearGradient from 'react-native-linear-gradient';

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

import { gradients } from '../../config/styles';

const whichPicture = (title) => {
  switch(title){
    case 'Pet Emergency Kit':
      return require('../../assets/icons/emergency_kit_icon.png');
    case 'Pet Profile':
      return require('../../assets/icons/pet_profile_home_icon.png');
    case 'Checklists':
      return require('../../assets/icons/checklist_icon.png');
    case 'Forms':
      return require('../../assets/icons/forms_icon.png');
    case 'Procedures':
      return require('../../assets/icons/procedures_icon.png');
    case 'Get Involved':
      return require('../../assets/icons/getinvolved_icon.png');
    default:
      return ;
  }
}

const HomeNavigationTab = ({title, navStackUID, targetRoute, targetTab, isTabNav, navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={ () => goToView(navStackUID, targetRoute, targetTab, isTabNav, navigation) }
    >
      <View style={styles.tabContainer}>
        <LinearGradient
          colors={ ( title === 'Pet Profile' || title === 'Pet Emergency Kit') ? gradients.blueTabGradient : gradients.redTabGradient}
          style={styles.linearGradient}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1.0}}
          locations={[0,1]}
        >
        </LinearGradient>
        <View style={styles.tab}>
          <Image source={whichPicture(title)}
          style={ styles.image } />
          <Text style={styles.tabText}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

HomeNavigationTab.propTypes = {
  title: PropTypes.string,
  navStackUID: PropTypes.string,
  targetRoute: PropTypes.string,
  targetTab: PropTypes.string,
  isTabNav: PropTypes.bool,
  navigation: PropTypes.object
}

export default HomeNavigationTab;
