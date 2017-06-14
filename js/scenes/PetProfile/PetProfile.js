import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import { styles } from './styles';

const PetProfile = ({ createProfile }) => {
  return (
    <View>
      <TouchableHighlight style={styles.createProfile} onPress={() => createProfile()} >
        <Text>Create Pet Profile</Text>
      </TouchableHighlight>
    </View>
  );
}

export default PetProfile;