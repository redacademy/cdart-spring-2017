import React from 'react';
import {
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

const IntakeForm = () => {
  return (
  <LinearGradient
    start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.0}}
    locations={[0,1.0]}
    colors={['#4d96cd', '#6ca5cf']}
    style={styles.linearGradient}
  >
    <View>

    </View>
  </LinearGradient>
  )
}

export default IntakeForm;
