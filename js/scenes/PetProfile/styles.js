import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  createProfile: {
    padding: 40,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'lightgrey'
  },
  createProfileText: {
    textAlign: 'center',
    flex: 2/3,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 17,
  },
  bePrepared: {
    height: height / 1.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bePreparedText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#3D78A3',
    lineHeight: 23,
    padding: 55,
    paddingTop: 0,
  },
  singleDog: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingLeft: 10,
    paddingRight: 20,
  },
  dogPicContainer: {
    borderRadius: 10,
  },
  dogPic: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  dogText: {
    padding: 20,
    flex: 1/2,
  },
  plusCicle: {

  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  breed: {
    color: 'grey',
    lineHeight: 21,
    fontSize: 18,
  },
  edit: {
    color: '#3D78A3',
    fontSize: 17,
    flex: 1/4,
    textAlign: 'right',
  }
});
