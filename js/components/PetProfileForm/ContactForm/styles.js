import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  heading: {
    color: colors.asphaltGrey,
    paddingVertical: 5
  },
  textInput: {
    height: 30,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  }
});