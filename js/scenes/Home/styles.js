import { StyleSheet, Dimensions } from 'react-native';
import { typography, colors } from '../../config/styles';
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
    height: (height - 100) * 0.34,
    width: width,
    marginTop: height*( 16 / 568 )
  },
  volunteerSection: {
    height: (height - 100) * 0.55,
    width: width,
  },
  ownerHeader: {
    width: width,
    textAlign: 'center',
    color: '#20425B',
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  volunteerHeader: {
    width: width,
    textAlign: 'center',
    color: '#20425B',
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    fontSize: 16,
    paddingBottom: height*( 16 / 568 )
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center'
  },
});
