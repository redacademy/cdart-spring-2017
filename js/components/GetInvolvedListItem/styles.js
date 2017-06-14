import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  blank: {
    backgroundColor: '#dee8ef',
    padding: 20,
  },
  description:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  textList: {
    padding: 5,
    fontSize: 16
  },
  singleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
