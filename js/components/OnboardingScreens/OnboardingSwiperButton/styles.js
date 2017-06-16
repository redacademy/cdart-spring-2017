import {
  StyleSheet
} from 'react-native';

import { colors } from '../../../config/styles';

export const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 10,         // Rounded border
    borderWidth: 2,           // 2 point border widht
    borderColor: colors.blue,   // White colored border
    paddingHorizontal: 50,    // Horizontal padding
    paddingVertical: 10,
    backgroundColor: colors.blue,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
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
