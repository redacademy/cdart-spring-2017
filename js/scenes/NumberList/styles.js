import { StyleSheet } from 'react-native';

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
    fontSize: 32,
    width: 50,
    textAlign: 'center'
  },
  receptionText: {
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 16,
    lineHeight: 20
  }
});
