import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

const SwitchButton = () => {
  return (
    <View style={styles.container}>

      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Female</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Male</Text>
      </TouchableHighlight>

    </View>
  );
}

export default SwitchButton;