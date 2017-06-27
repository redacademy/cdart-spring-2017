import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 15,
    overflow: 'hidden',
    width: 210,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 210,
    height: 140
  },
  icon: {
    flexBasis: 'auto'
  }
});
