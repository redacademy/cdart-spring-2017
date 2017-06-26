import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const contentWidth = width * 0.85;

export const styles = StyleSheet.create({
  profileContainer: {
    width: width,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileImage: {
    height: height * 0.25,
    width: width * 0.65,
    marginBottom: 20,
    borderRadius: height * 0.05
  },
  textRow: {
    width: contentWidth,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  seperator: {
    height: 1,
    width: contentWidth,
    marginBottom: 15,
    backgroundColor: colors.asphaltGrey,
  },
  nameLabel: {
    width: contentWidth / 2,
    fontSize: typography.baseSize,
    fontWeight: '600',
    fontFamily: typography.fontMain
  },
  name: {
    width: contentWidth / 2,
    paddingRight: 15,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: typography.fontMain
  },
  leftText: {
    width: contentWidth / 2,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    fontWeight: '600'
  },
  rightText: {
    width: contentWidth / 2,
    paddingRight: 15,
    textAlign: 'right',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain
  },
  buttonRow: {
    width: contentWidth,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  genderToggle: {
    overflow: 'hidden',
    height: height * 0.06,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: height * 0.01,
    flex: 0.45,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  gender: {
    height: height * 0.06,
    paddingHorizontal: 5,
    flex: 1,
    justifyContent: 'center'
  },
  selectedGender: {
    height: height * 0.06,
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center'
  },
  genderText: {
    textAlign: 'center',
    color: colors.lightGrey,
    fontSize: 12,
    fontFamily: typography.fontMain
  },
  selectedGenderText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontFamily: typography.fontMain
  },
  notNeutered: {
    overflow: 'hidden',
    height: height * 0.06,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    borderRadius: height * 0.05,
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notNeuteredText: {
    color: colors.asphaltGrey,
    fontSize: 12,
    fontFamily: typography.fontMain
  },
  neutered: {
    overflow: 'hidden',
    height: height * 0.06,
    marginLeft: 20,
    backgroundColor: colors.green,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: height * 0.05,
    flex: 0.58,
    justifyContent: 'center',
    alignItems: 'center'
  },
  neuteredText: {
    color: 'white',
    fontSize: 12,
    fontFamily: typography.fontMain
  },
  sectionHeader: {
    width: contentWidth,
    marginBottom: 10,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    fontWeight: '600'
  },
  temperamentSection: {
    width: contentWidth,
    marginBottom: 20,
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  temperamentBubble: {
    overflow: 'hidden',
    height: height * 0.06,
    marginVertical: 7,
    paddingHorizontal: 18,
    paddingTop: height * 0.012,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    borderRadius: height * 0.05,
  },
  selectedTemperamentBubble: {
    overflow: 'hidden',
    height: height * 0.06,
    marginVertical: 7,
    paddingHorizontal: 18,
    paddingTop: height * 0.012,
    backgroundColor: colors.green,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: height * 0.05,
  },
  temperamentText: {
    fontSize: 12,
    fontFamily: typography.fontMain,
    color: colors.lightGrey
  },
  selectedTemperamentText: {
    fontSize: 12,
    fontFamily: typography.fontMain,
    color: 'white'
  },
  textInfoSection: {
    width: contentWidth,
    marginBottom: 15,
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blueTextArea: {
    flex: 1,
    width: contentWidth,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.dimBlue,
    borderRadius: height * 0.01,
  },
  blueTextAreaText : {
    fontSize: 12,
    fontFamily: typography.fontMain
  }
});
