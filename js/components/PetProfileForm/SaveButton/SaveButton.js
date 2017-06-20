import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

const SaveButton = ({ handleSubmit }) => {
  return (
    <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
      <Text style={styles.buttonText}>Save Profile</Text>
    </TouchableOpacity>
  );
}

export default SaveButton;