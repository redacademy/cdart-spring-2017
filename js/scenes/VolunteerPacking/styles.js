import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  greyTop: {
    backgroundColor: 'rgba(61,120,163,0.17)',
    // flex: 1,
    alignItems: 'center',
    width: width,
    padding: 16,
  },
  greyTopText: {
    fontSize: 16,
    lineHeight: 19,
    fontStyle: 'italic',
    color: '#4A4A4A'
  },
  separator: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});