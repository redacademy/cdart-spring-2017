import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

const ToggleButton = () => {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>Friendly</Text>
    </TouchableHighlight>
  );
}

export default ToggleButton;