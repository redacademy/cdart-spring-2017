import { StyleSheet, Dimensions } from 'react-native';

var { width } = Dimensions.get('window');

import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  subtitle: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 0,
    backgroundColor: colors.dimBlue,
  },
  description: {
    marginTop: 2,
    marginBottom: 2,
    color: colors.asphaltGrey
  },
  listText: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor:colors.white,
    borderColor: colors.grey,
    paddingLeft:16,
    height:40,
    justifyContent:'center',
    textAlignVertical: 'center',
    lineHeight: 40,
    fontSize: 16,
    color: colors.asphaltGrey
  },
  listBox: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:colors.white,
    alignItems:'center',
  },
  listBoxContainer: {
    height: 100,
    justifyContent:'center',
    backgroundColor: colors.dimBlue,
    width: width
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
});
