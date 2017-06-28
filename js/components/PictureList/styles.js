import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
let { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#DEE8F0',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
  textList: {
    padding: 16,
    fontSize: 16
  },
  singleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: width,
    height: (height / 2.75)
  }
});
