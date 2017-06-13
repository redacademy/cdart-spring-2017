import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 4,
    marginTop: 32,
    borderWidth: 2,
    width: width / 2.13333333333,
    height: height / 5.16363636364,
    alignItems: 'center',
    borderRadius: 7,
    borderTopWidth: 10,
    borderTopColor: 'blue',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});
