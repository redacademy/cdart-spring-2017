import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tweet: {
    flexDirection:'row',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: .5,
    borderColor:'grey',
    justifyContent:'space-between'
  },
  nameDate: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  tweetImage: {
    width: '100%',
    height:250,
    marginBottom: 8,
    marginTop:4
  },
  hashTag: {
    color:'blue'
  },
  screenWidth: {
    width: width - 32
  }
});
