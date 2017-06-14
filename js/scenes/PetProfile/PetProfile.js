import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const PetProfile = () => {
  return (
    <View>
      <View style={styles.createProfile} >
        <Text>Create Pet Profile</Text>
      </View>
    </View>
  );
}

export default PetProfile;