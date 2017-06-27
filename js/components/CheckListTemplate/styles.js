import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';
var { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  greyTop: {
    backgroundColor: 'rgba(61,120,163,0.17)',
    alignItems: 'center',
    width: width,
    padding: 16,
  },
  greyTopText: {
    fontSize: typography.baseSize,
    lineHeight: 19,
    fontStyle: 'italic',
    fontFamily: typography.fontMain,
    color: '#4A4A4A'
  },
  separator: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  blank: {
      backgroundColor: colors.dimBlue,
      padding: 14,
  }
});
