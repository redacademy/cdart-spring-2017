import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

const SaveButton = () => {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>Save Profile</Text>
    </TouchableHighlight>
  );
}

export default SaveButton;