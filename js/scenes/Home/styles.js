import { StyleSheet, Dimensions } from 'react-native';

// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;
var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EEF3F7'

  },
  ownerSection: {
    height: (height - 100) * 0.35,
    width: width,
    marginTop: height*( 16 / 568 )
  },
  volunteerSection: {
    height: (height - 100) * 0.55,
    width: width,
  },
  homeHeader: {
    width: width,
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: height*( 16 / 568 )

  },
  tabContainer: {
    paddingHorizontal: width * 0.015,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center'
  },
});
