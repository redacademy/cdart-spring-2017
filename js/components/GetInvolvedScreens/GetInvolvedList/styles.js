import { StyleSheet } from 'react-native';

import { colors } from '../../../config/styles';

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
  blank: {
    backgroundColor: colors.dimBlue,
    padding: 14,
  },
  container: {
    flex: 1,
  }
});
