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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dogPic: {
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  plusCicle: {

  },
  breed: {
    color: 'grey',
  },
  edit: {
    color: 'blue',
  }
});
