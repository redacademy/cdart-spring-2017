import React from 'react';
import PropTypes from 'prop-types';

import { goToView } from '../../lib/navigationHelpers';
import LinearGradient from 'react-native-linear-gradient';

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

import { gradients } from '../../config/styles';

const HomeNavigationTab = ({title, navStackUID, targetRoute, targetTab, isTabNav, navigation}) => {

  return (
    <TouchableWithoutFeedback
      onPress={ () => goToView(navStackUID, targetRoute, targetTab, isTabNav, navigation) }
    >
      <View style={styles.tabContainer}>
      <LinearGradient
              colors={ ( title === 'Pet Profile' || title === 'Pet Emergency Kit') ? gradients.blueGradient : gradients.redTabGradient}
              style={styles.linearGradient}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1.0}}
              locations={[0,1]}
            >
      </LinearGradient>
          <View style={styles.tab}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            style={ styles.image } />
            <Text style={styles.tabText}>{title}</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

HomeNavigationTab.propTypes = {
  title: PropTypes.string
}

export default HomeNavigationTab;
