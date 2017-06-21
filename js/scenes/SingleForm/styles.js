import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pdf: {
    flex: 1
  },
  infoIcon: {
    bottom: height * 0.135,
    left: width * 0.75,
    width: 60,
    height: 60,
  }
});
