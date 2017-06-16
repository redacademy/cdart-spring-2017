import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { gradients } from '../../../config/styles';

const mainImage = require('../../../assets/icons/onboarding_paw.png');

const OnboardingPet = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.0}}
      locations={[0,1.0]}
      colors={gradients.blueGradient}
      style={styles.linearGradient}
    >
      <View style={[styles.slide, { backgroundColor: 'transparent' } ]}>
        <Image
          source={mainImage}
          style={styles.mainImage}
        />
        <Text style={styles.header}>Own a furry friend?</Text>
        <Text style={styles.text}>Create a shareable pet profile to help locate your pet during an emergency.</Text>
      </View>
    </LinearGradient>
  );
}

export default OnboardingPet;
