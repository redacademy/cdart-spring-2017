import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const contentWidth = width * 0.85;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    width: contentWidth
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  heading: {
    marginBottom: 10,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    fontWeight: '600',
    flex: 3
  },
  icon: {
    textAlign: 'right',
    flex: 1,
  },
  leftText: {
    marginBottom: 5,
    paddingLeft: 5,
    width: contentWidth / 2,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    fontWeight: '600'
  },
  blueTextArea: {
    flex: 1,
    width: contentWidth,
    marginBottom: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.dimBlue,
    borderRadius: height * 0.01,
  },
  blueTextAreaText : {
    fontSize: 12,
    fontFamily: typography.fontMain
  }
});
