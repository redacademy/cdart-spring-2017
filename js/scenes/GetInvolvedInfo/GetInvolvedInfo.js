import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

var { width } = Dimensions.get('window');

const GetInvolvedInfo = ({infoData, handleClick}) => {
  return (
    <ScrollView>
      <Image source={{uri: infoData.image}}
        style={{width: width, height: 150}} />
      {infoData.subsection.map((info, i) => (
        <View key={i}>
          <Text>{info.subtitle}</Text>
          <Text>{info.description}</Text>
        </View>
      ))
      }
      <TouchableHighlight
        onPress={() => handleClick(infoData.link)}
      >
        <View style={styles.singleItem}>
          <Text style={styles.textList}>{infoData.linktext}</Text>
          <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
          style={{width: 25, height: 25, marginRight: 8}} />
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}

GetInvolvedInfo.propTypes = {
  infoData: PropTypes.object,
  handleClick: PropTypes.func,
};

export default GetInvolvedInfo;
