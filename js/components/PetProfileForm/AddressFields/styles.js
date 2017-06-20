import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  heading: {
    color: colors.asphaltGrey,
    paddingVertical: 5
  },
  subheading: {
    color: colors.asphaltGrey,
    fontSize: 12,
  },
  textInput: {
    height: 30,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  textInputShort: {
    width: 65,
    marginTop: 5
  },
  textInputMedium: {
    width: 200,
    marginTop: 5
  }
});