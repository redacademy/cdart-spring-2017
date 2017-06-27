import { StyleSheet, Dimensions } from 'react-native';

import { typography, colors } from '../../config/styles'

export const styles = StyleSheet.create({
  incident: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  arrow: {
    marginRight: 8,
  },
  incidentText: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontFamily: typography.fontMain,
    backgroundColor:'white',
    fontSize: typography.baseSize
  },
  list: {
    backgroundColor:'#DEE8F0',
  }
});
