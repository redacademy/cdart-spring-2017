import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const contentWidth = width * 0.85;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: contentWidth
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  heading: {
    marginBottom: 10,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    fontWeight: '600',
    flex: 1
  },
  icon: {
    textAlign: 'right',
    flex: 1,
  }
});
