import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },
  heading: {
    color: colors.asphaltGrey,
    paddingVertical: 5
  },
  textInput: {
    height: 30,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
  }
});
