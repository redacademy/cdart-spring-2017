import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  button: {
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5
  },
  buttonText: {
    color: colors.black,
    fontSize: 14,
    alignSelf: 'center'
  },
});