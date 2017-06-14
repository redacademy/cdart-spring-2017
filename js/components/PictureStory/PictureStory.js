import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions } from 'react-native';
import { styles } from './styles';

var { height, width } = Dimensions.get('window');


class PictureStory extends Component {
  renderContent(){
    if(this.props.content.title1){
      return (
        <View>
          <Text style={styles.header}>{this.props.content.title1}</Text>
          <Text>{this.props.content.paragraph1}</Text>
          {this.renderMoreContent()}
        </View>

      );
    }
  }
  renderMoreContent(){
    if(this.props.content.title2){
      return (
        <View>
          <Text style={styles.header}>{this.props.content.title2}</Text>
          <Text>{this.props.content.paragraph2}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View>
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/73/91/86/7391863170be07a072ffeb3e7605db2a.jpg'}}
        style={{width: width, height: 200}} />
        {this.renderContent()}
        {this.renderMoreContent()}
      </View>
    );
  }
}

export default PictureStory;
