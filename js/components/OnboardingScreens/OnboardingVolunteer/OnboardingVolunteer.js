import React from 'react';
import {
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

const OnboardingVolunteer = () => {
  return (
      <LinearGradient
        start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.0}}
        locations={[0,1.0]}
        colors={['#fa725d', '#bf3841']}
        style={styles.linearGradient}
      >
        <View style={[styles.slide, { backgroundColor: 'transparent' } ]}>
            <Text style={styles.header}>Already a volunteer?</Text>
            <Text style={styles.text}>Review your volunteer training, download forms, and contact team members.</Text>
        </View>
      </LinearGradient>
    );
  }

export default OnboardingVolunteer;
