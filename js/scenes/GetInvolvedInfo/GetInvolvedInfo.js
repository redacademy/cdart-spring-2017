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

import { styles } from './styles';

var { width } = Dimensions.get('window');

const missionImage = require('../../assets/images/cdart_mission.png');
const courseImage = require('../../assets/images/take_a_course.png');
const volunteerImage = require('../../assets/images/take_a_course.png');
const donateImage = require('../../assets/images/take_a_course.png');
const rateImage = require('../../assets/images/take_a_course.png');
let image = null;

const GetInvolvedInfo = ({infoData, handleClick}) => {
  if(infoData.image === 'mission') image = missionImage;
  if(infoData.image === 'course') image = courseImage;
  if(infoData.image === 'volunteer') image = volunteerImage;
  if(infoData.image === 'donate') image = donateImage;
  if(infoData.image === 'rate') image = rateImage;
  return (
    <ScrollView style={styles.contentContainer}>
      <Image source={image}
        style={{width: width, height: 150}} />
      {infoData.subsection.map((info, i) => (
        <View key={i} style={{padding:16}}>
          <Text style={styles.subtitle}>{info.subtitle}</Text>
          <Text style={styles.description}>{info.description}</Text>
        </View>
      ))
      }
      <View style={styles.listBoxContainer}>
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
      </View>
    </ScrollView>
  );
}

GetInvolvedInfo.propTypes = {
  infoData: PropTypes.object,
  handleClick: PropTypes.func,
};

export default GetInvolvedInfo;
