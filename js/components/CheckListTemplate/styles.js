import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../config/styles';
var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  greyTop: {
    backgroundColor: 'lightgrey',
    // flex: 1,
    alignItems: 'center',
    width: width,
    padding: 16,
  },
  greyTopText: {
    color: 'darkgrey'
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
