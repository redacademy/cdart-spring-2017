import { StyleSheet, Dimensions, Platform } from 'react-native';

import { colors } from '../../../config/styles';

var { height } = Dimensions.get('window');

const navBarHeight = (Platform.OS !== 'ios' ? 54 : 64);
const componentHeights = 245+height/2.75+49+navBarHeight;

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
  blank: {
    backgroundColor: colors.dimBlue,
    height: height-(componentHeights),
  },
  container: {
    flex: 1,
  }
});
