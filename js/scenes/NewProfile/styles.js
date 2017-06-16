import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  inlineButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    fontWeight: 'bold'
  },
  toggleButtonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: 4,
    justifyContent: 'center'
  },
  multilineInput: {
    height: 60,
    width: '100%',
    borderColor: colors.skyBlue,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 15,
    fontSize: 12
  },

});