import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions } from 'react-native';
import { styles } from './styles';

var { height, width } = Dimensions.get('window');

class PictureStory extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/73/91/86/7391863170be07a072ffeb3e7605db2a.jpg'}}
        style={{width: width, height: 200}} />
        <Text>About the app</Text>
        <Text>Canadian Disaster Animal Response Team</Text>
        <Text>CDART volunteers respond in times of disaster and emergencies when domestic animals are in need of rescue and sheltering. CDART is 100% volunteer based and 100%  of our funding comes from donations.</Text>
      </View>
    );
  }
}

export default PictureStory;

