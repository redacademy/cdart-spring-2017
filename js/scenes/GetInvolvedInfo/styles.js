import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  subtitle: {
    color: '#4079A2',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 0
  },
  description: {
    marginTop: 2,
    marginBottom: 2
  },
  listText: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor:'white',
    borderColor: '#CDCDCD',
    paddingLeft:16,
    height:40,
    justifyContent:'center',
    textAlignVertical: 'center',
    lineHeight: 40,
    fontSize: 16
  },
  listBox: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    alignItems:'center'
  },
  listBoxContainer: {
    borderWidth: 1,
    height: 100,
    justifyContent:'center',
    backgroundColor: 'rgba(61,120,163,0.17)',
    borderColor: '#CDCDCD',
    width: width
  }
});
