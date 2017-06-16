import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 10,
    height: 40,
    marginVertical: 20,
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});