import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  zoomButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 52,
    marginBottom: 5,
    backgroundColor: colors.skyBlue,
    borderRadius: 50,
  }
});
