import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  textList: {
    padding: 16,
    fontSize: 16
  },
  singleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  icon:{
    width: width*(25 / 320),
    marginRight: 8
  }
});
