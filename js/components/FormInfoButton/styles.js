import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  infoIcon: {
    bottom: height * 0.2,
    left: width * 0.75,
    width: 60,
    height: 60,
  }
});
