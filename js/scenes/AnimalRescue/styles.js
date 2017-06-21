import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  animalFlow: {
    maxHeight: height,
    maxWidth: width,
    backgroundColor: 'aquamarine'
  }
});
