import { StyleSheet, Dimensions } from 'react-native';
import { typography } from '../../config/styles';

var { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingRight: 10,
  },
  greenCheck: {
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'grey'
  },
  clickedGreenCheck: {
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'grey'
  },
  itemText: {
    padding: 16,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    width: width*(270 / 320)
  }
});
