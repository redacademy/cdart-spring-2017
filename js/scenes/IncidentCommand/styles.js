import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  incident: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  arrow: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  incidentText: {
    padding: 10,
  }
});