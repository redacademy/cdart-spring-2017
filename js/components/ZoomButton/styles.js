import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  zoomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    marginBottom: 5,
    backgroundColor: colors.skyBlue,
    borderRadius: 35,
  }
});