import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  greyTop: {
    backgroundColor: 'lightgrey', //change
    // flex: 1,
    alignItems: 'center',
    width: width,
    padding: 16,


  },
  greyTopText: {
    color: 'darkgrey'
  }

});