import React, { Component } from 'react';
import { View, Text, Image, ListView, Dimensions,ScrollView } from 'react-native';
import { styles } from './styles';

var { height, width } = Dimensions.get('window');


class PictureStory extends Component {
  renderContent(){
    if(this.props.content.title1){
      return (
        <View>
          <Text style={styles.header}>{this.props.content.title1}</Text>
          <Text style={styles.paragraph}>{this.props.content.paragraph1}</Text>
        </View>
      );
    }
  }
  renderMoreContent(){
    if(this.props.content.title2){
      return (
        <View>
          <Text style={styles.header}>{this.props.content.title2}</Text>
          <Text style={styles.paragraph}>{this.props.content.paragraph2}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View>
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/73/91/86/7391863170be07a072ffeb3e7605db2a.jpg'}}
        style={{width: width, height: 150}} />
        <ScrollView style={styles.contentContainer}>
          {this.renderContent()}
          {this.renderMoreContent()}
        </ScrollView>
      </View>
    );
  }
}

export default PictureStory;
