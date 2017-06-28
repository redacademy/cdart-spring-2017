import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  pdfViewer: {
    height: height * 0.88,
    width: width,
    marginBottom: 1,
    backgroundColor: colors.dimBlue
  },
  instructionsBox: {
    backgroundColor: colors.dimBlue,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructionsText: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    textAlign: 'center'
  },
  zoomContainer: {
    height: height / 4,
    width: 50,
    bottom: height / 4.5,
    left: width * 0.765,
    backgroundColor: 'transparent',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
