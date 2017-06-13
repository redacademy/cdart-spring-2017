import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  greyTop: {
    backgroundColor: 'lightgrey', //change
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
});