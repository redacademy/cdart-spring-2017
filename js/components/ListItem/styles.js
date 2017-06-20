import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

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
    width: width*(270 / 320)
  }
});
