import React from 'react';
import PropTypes from 'prop-types';

import { goToView } from '../../lib/navigationHelpers';

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const HomeNavigationTab = ({title, navStackUID, targetRoute}) => {

  return (
    <TouchableWithoutFeedback
      onPress={ goToView(navStackUID, targetRoute) }
    >
      <View style={styles.tab}>

        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={ styles.image } />

        <Text>{title}</Text>

      </View>
    </TouchableWithoutFeedback>
  );
}

HomeNavigationTab.propTypes = {
  title: PropTypes.string
}

export default HomeNavigationTab;
