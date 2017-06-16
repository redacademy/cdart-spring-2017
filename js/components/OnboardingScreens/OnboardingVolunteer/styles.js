import { StyleSheet } from 'react-native';
import { colors } from '../../../config/styles';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: colors.white,
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  buttontext: {
    color: colors.asphaltGrey,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  mainImage: {
    width: 182,
    height: 140
  }
});
