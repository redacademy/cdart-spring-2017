import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ownerSection: {
    height: (height - 140) * 0.4,
    width: width,
    marginBottom: 10,
  },
  volunteerSection: {
    height: (height - 140) * 0.6,
    width: width,
  },
  homeHeader: {
    width: width,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  tabContainer: {
    paddingHorizontal: width * 0.05,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
