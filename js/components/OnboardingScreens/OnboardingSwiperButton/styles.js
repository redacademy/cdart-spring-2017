import {
  StyleSheet
} from 'react-native';

import { colors } from '../../../config/styles';

export const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50,         // Rounded border
    borderWidth: 2,           // 2 point border widht
    borderColor: colors.white,   // White colored border
    paddingHorizontal: 50,    // Horizontal padding
    paddingVertical: 10,      // Vertical padding
  },
  buttonarrow: {
    alignItems: 'flex-end'
  },
  // Button text
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
});
