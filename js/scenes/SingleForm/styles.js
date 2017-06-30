import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pdf: {
    flex: 1
  },
  printButton: {
    marginTop: 3,
    marginRight: 30,
    backgroundColor: 'transparent'
  },
  infoIcon: {
    bottom: height * 0.135,
    left: width * 0.75,
    width: 60,
    height: 60,
  },
  disclaimerText: {
    width: width * 0.6,
    marginTop: height * 0.3,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: typography.fontMain,
    fontWeight: '600',
    color: colors.dimBlue,
    textAlign: 'center',
    alignSelf: 'center'
  }
});
