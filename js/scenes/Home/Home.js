import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableWithoutFeedback
}from 'react-native';

import { styles } from './styles';

import { goToView, goToTab } from '../../lib/navigationHelpers';

import PetProfile from '../PetProfile';

import HomeTab from '../../components/HomeNavigationTab';

const homeStackUID = 'home';
const mainStackUID = 'main';

const Home = ({ navigation }) => {

  return (
    <View style={ styles.container }>
      <View style={ styles.ownerSection }>
        <Text style={ styles.homeHeader }>
          Pet Owner
        </Text>
        <View style={ styles.tabContainer }>
          <HomeTab
            title='Pet Emergency Kit'
            navStackUID={ homeStackUID }
            targetRoute='emergencyKit'
            isTabNav={ false }
          />
          <HomeTab
            title='Pet Profile'
            targetRoute='petProfile'
            targetTab='petProfile'
            isTabNav={ true }
            navigation={ navigation }
          />
        </View>
      </View>
      <View style={ styles.volunteerSection }>
        <Text style={ styles.homeHeader }>
          Volunteer
        </Text>
        <View style={ styles.tabContainer }>
          <HomeTab
            title='Checklists'
            navStackUID={ homeStackUID }
            targetRoute='checklists'
            isTabNav={ false }
          />
          <HomeTab
            title='Forms'
            navStackUID={ homeStackUID }
            targetRoute='forms'
            isTabNav={ false }
          />
          <HomeTab
            title='Procedures'
            navStackUID={ homeStackUID }
            targetRoute='procedures'
            isTabNav={ false }
          />
          <HomeTab
            title='Get Involved'
            targetRoute='getInvolved'
            targetTab='getInvolved'
            isTabNav={ true }
            navigation={ navigation }
          />
        </View>
      </View>
    </View>
  )
}

export default Home;
