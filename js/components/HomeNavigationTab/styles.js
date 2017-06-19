import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');
import { typography } from '../../config/styles';

export const styles = StyleSheet.create({
  tab: {
    // padding: 4,
    // marginBottom: 30,
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: width*.45,
    height: height*.175,
    borderColor: '#D9E4EB',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    position:'absolute',
    top: height*.0111,
    left: width* -( 1.5 / 320),
    backgroundColor: 'white'
  },
  tabContainer: {
    position: 'relative',
    width: width*.44,
    height: height*.175,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: height* (16 / 568)
  },
  image: {
    height: height*(65 / 568),
    width: width*(65 / 320),
    resizeMode: 'contain'
  },
  tabText: {
    marginTop: height* (4 / 568),
    // fontFamily: typography.fontMain
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
