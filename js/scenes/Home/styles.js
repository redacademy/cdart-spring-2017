import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: 'aquamarine'
  },
  homeHeader: {
    marginTop: 20,
    marginBottom: 35,
  },
  tabContainer: {
    height: 'auto',
    width: width * 0.8,
    paddingHorizontal: width * 0.1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  tab: {
    height: 125,
    width: 160,
    backgroundColor: 'yellow'
  }
});
