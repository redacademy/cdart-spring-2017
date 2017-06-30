import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  // contentContainer: {
  //   flex: 1,
  //   alignItems: 'center'
  // },
  createProfile: {
    padding: 40,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: colors.lightGrey
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
    color: colors.blue,
    lineHeight: 23,
    padding: 55,
    paddingTop: 0,
  },
  singlePet: {
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
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
    color: colors.grey,
    lineHeight: 21,
    fontSize: 18,
  },
  edit: {
    color: colors.blue,
    fontSize: 17,
    alignSelf: 'center'
  },
  editContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  trashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    flex: 1/3,
    flexDirection: 'row'
  },
  newProfileButton: {
    width: width / 2,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontFamily: typography.fontMain,
    fontSize: 18,
    color: colors.skyBlue,
    textAlign: 'center',
  }
});
