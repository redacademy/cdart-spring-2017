import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text
}from 'react-native';

import styles from './styles';

const Home = () => {

  return (
    <View style={ styles.container }>
      <Text style={ styles.homeHeader }>
        Pet Owner
      </Text>

      <View style={ styles.tabContainer }>
        <View style={ styles.tab }>
        </View>

        <View style={ styles.tab }>
        </View>
      </View>

      <Text style={ styles.homeHeader }>
        Volunteer
      </Text>

      <View style={ styles.tabContainer }>
        <View style={ styles.tab }>
        </View>

        <View style={ styles.tab }>
        </View>
      </View>
    </View>
  )
}

export default Home;
