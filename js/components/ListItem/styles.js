import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  greenCheck: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'black'
  },
  clickedGreenCheck: {
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'black'
  },
  itemText: {
    padding: 16,
  }
});