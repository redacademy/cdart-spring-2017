import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5},
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  buttonText: {
    color: colors.black,
    fontSize: 14,
    alignSelf: 'center'
  }
});