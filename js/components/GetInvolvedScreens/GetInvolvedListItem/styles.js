import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  textList: {
    padding: 12,
    fontSize: 16
  },
  singleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
