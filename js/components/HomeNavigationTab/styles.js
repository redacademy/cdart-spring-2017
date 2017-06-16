import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tab: {
    padding: 4,
    marginBottom: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: width / 2.25,
    height: height / 6,
    borderColor: '#D9E4EB',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    position:'absolute',
    top: 5,
    left: -1,
    backgroundColor: 'white'
  },
  tabContainer: {
    position: 'relative',
    width: width / 2.3,
    height: height / 6,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 16
  },
  image: {
    height: 60,
    width: 60,
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
