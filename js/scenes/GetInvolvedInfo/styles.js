import { StyleSheet, Dimensions } from 'react-native';

var { width } = Dimensions.get('window');

import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 0
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 100,
    justifyContent:'center',
    backgroundColor: colors.dimBlue,
    borderColor: colors.grey,
    width: width
  }
});
