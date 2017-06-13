import React from 'react';
import {
<<<<<<< HEAD
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

const OnboardingPet = () => {
  return (
      <LinearGradient
        start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.0}}
        locations={[0,1.0]}
        colors={['#4d96cd', '#6ca5cf']}
        style={styles.linearGradient}
      >
        <View style={[styles.slide, { backgroundColor: 'transparent' } ]}>
            <Text style={styles.header}>Own a furry friend?</Text>
            <Text style={styles.text}>Create a shareable pet profile to help locate your pet during an emergency.</Text>
        </View>
      </LinearGradient>
    );
  }
=======
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

const OnboardingPet = () => {
  return (
    <View>
      <Text >Welcome to CDART Assist</Text>
      <Text >Assisting you and your domestic animals in preparation for an emergency</Text>
      <TouchableHighlight onPress={console.log('here')}>
        <Text> Hello </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={console.log('here')}>
        <Text> Hello </Text>
      </TouchableHighlight>
    </View>
  );
}
>>>>>>> add onboarding scenes

export default OnboardingPet;
