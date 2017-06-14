import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  header: {
    color: '#4079A2',
    fontSize: 16,
  },
  contentContainer: {
    padding: 16
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 8
  }
});
