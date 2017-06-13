import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tab: {
    padding: 4,
    marginBottom: 10,
    borderWidth: 2,
    width: width / 2.2,
    height: height / 5.16363636364,
    alignItems: 'center',
    borderRadius: 7,
    borderTopWidth: 10,
    borderTopColor: 'blue',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    height: 75,
    width: 75
  }
});
