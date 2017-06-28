import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/styles';

import { styles } from './styles';

var { width, height } = Dimensions.get('window');

const whichImage = (icon) => {
  switch(icon){
    case 'mission':
      return require('../../assets/images/cdart_mission.png');
    case 'course':
      return require('../../assets/images/take_a_course.png');
    case 'volunteer':
      return require('../../assets/images/take_a_course.png');
    case 'donate':
      return require('../../assets/images/take_a_course.png');
    case 'rate':
      return require('../../assets/images/take_a_course.png');
    default:
      return ;
  }
}

const GetInvolvedInfo = ({infoData, handleClick}) => {
  return (
    <ScrollView style={styles.contentContainer}>
      <Image source={whichImage(infoData.image)}
        style={{width: width, height: (height / 2.75), flex:1}} />
      {infoData.subsection.map((info, i) => (
        <View key={i} style={{padding:16, backgroundColor:colors.white}}>
          <Text style={styles.subtitle}>{info.subtitle}</Text>
          <Text style={styles.description}>{info.description}</Text>
        </View>
      ))
      }
      <View style={styles.separator} />
      <View style={styles.listBoxContainer}>
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={() => handleClick(infoData.link)}
        >
          <View style={styles.listBox}>
            <Text style={styles.listText}>{infoData.linktext}</Text>
            <Icon
              name={
                Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
              }
              size={32}
              color={'grey'}
              style={{marginRight: 8}}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
}

GetInvolvedInfo.propTypes = {
  infoData: PropTypes.object,
  handleClick: PropTypes.func,
};

export default GetInvolvedInfo;
