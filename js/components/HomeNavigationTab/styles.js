import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tab: {
    // padding: 4,
    marginBottom: 10,
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: width*.48,
    height: height*.175,
    borderColor: '#D9E4EB',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    position:'absolute',
    top: height*.0111,
    // left: -(width*.0035),
    backgroundColor: 'white'
  },
  tabContainer: {
    position: 'relative',
    width: width*.43,
    height: height*.175,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 16
  },
  image: {
    height: 65,
    width: 65,
    resizeMode: 'contain'
  },
  tabText: {
    marginTop: 4,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
