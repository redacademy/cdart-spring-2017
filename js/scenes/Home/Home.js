import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text
}from 'react-native';

import { styles } from './styles';

import HomeTab from '../../components/HomeNavigationTab';

const navStackUID = 'home';

const Home = () => {

  return (
    <View style={ styles.container }>
      <View style={ styles.ownerSection }>
         <Text style={ styles.homeHeader }>
          Pet Owner
        </Text>

        <View style={ styles.tabContainer }>
          <HomeTab
            title='Pet Emergency Kit'
            navStackUID={ navStackUID }
            targetRoute='emergencyKit'
          />

          <HomeTab />
        </View>
      </View>

      <View style={ styles.volunteerSection }>
        <Text style={ styles.homeHeader }>
          Volunteer
        </Text>

        <View style={ styles.tabContainer }>
          <HomeTab />

          <HomeTab />

          <HomeTab />

          <HomeTab />
        </View>
      </View>
    </View>
  )
}

export default Home;
