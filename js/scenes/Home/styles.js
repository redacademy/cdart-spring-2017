import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EEF3F7'

  },
  ownerSection: {
    height: (height - 100) * 0.35,
    width: width,
    marginTop:15
  },
  volunteerSection: {
    height: (height - 100) * 0.55,
    width: width,
  },
  homeHeader: {
    width: width,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16
  },
  tabContainer: {
    paddingHorizontal: width * 0.015,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center'
  },
  tab: {
    height: 90,
    width: 120,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: 'black',
  }
});
