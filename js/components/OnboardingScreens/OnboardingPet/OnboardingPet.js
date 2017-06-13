import React from 'react';
import {
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

export default OnboardingPet;
