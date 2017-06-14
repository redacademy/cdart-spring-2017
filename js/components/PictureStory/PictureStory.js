import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { styles } from './styles';

var {  width } = Dimensions.get('window');


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
        style={{width: width, height: 175}} />
        <ScrollView style={styles.contentContainer}>
          <View style={{padding:16}}>
            {this.renderContent()}
            {this.renderMoreContent()}
          </View>
          <View style={styles.listBoxContainer}>
            <View style={styles.listBox}>
              <Text style={styles.listText}>{this.props.content.listItemLink}</Text>
              <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
                style={{width: 25, height: 25, marginRight: 8}} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

PictureStory.propTypes = {
  content: PropTypes.shape({
      title1: PropTypes.string,
      paragraph1: PropTypes.string,
      title2: PropTypes.string,
      paragraph2: PropTypes.string,
      listItemLink: PropTypes.string
    }).isRequired

}

export default PictureStory;
