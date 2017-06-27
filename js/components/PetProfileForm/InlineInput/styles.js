import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    width: 175,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});
