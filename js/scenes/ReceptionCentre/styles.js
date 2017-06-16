import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  receptionContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  receptionNum: {
    fontSize: 36,
  },
  receptionText: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 17,
    lineHeight: 20
  }
});