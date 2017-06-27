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
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
    padding: 5,
  },
  textInputShort: {
    height: 30,
    width: 65,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 5
  },
  textInputMedium: {
    width: 200,
    marginTop: 5
  }
});
