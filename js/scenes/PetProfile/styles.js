import { StyleSheet, Dimensions } from 'react-native';

var { height } = Dimensions.get('window')

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
  singlePet: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingLeft: 10,
    paddingRight: 20,
  },
  petPicContainer: {
    borderRadius: 50,
    height: 60,
    width: 100,
  },
  petPic: {
    flex: 1,
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  petText: {
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
