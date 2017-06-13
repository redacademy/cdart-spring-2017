import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const HomeNavigationTab = ({title}) => {

  return (
    <View style={styles.tab}>
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={ styles.image } />
      <Text>{title}</Text>
    </View>
  );
}

HomeNavigationTab.propTypes = {
  title: PropTypes.text
}

export default HomeNavigationTab;
