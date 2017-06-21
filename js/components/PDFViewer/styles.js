import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  pdfViewer: {
    height: height * 0.8,
    width: width,
  },
  instructionsBox: {
    backgroundColor: colors.dimBlue,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructionsText: {
    height: 16,
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    textAlign: 'center'
  }
})
