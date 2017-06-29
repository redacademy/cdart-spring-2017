import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.skyBlue,
    borderWidth: 1,
    borderRadius: 5},
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  buttonSeparator: {
    borderColor: colors.skyBlue,
    borderRightWidth: 1,
  },
  clicked: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.skyBlue,
  },
  clickedSeparator: {
    borderColor: colors.skyBlue,
    borderRightWidth: 1
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'center'
  },
  clickedText: {
    color: 'white',
  }
});