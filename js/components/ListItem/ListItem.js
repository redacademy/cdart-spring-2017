import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import { Image, TouchableHighlight, Text, View } from 'react-native';

const imageSource = require('../../assets/icons/check@1x.png');

class ListItem extends Component {

  constructor (){
    super();
    this.state = {
      clicked: false
    }
  }

  render(){
    return (
      <TouchableHighlight onPress={() => this.setState({clicked: !this.state.clicked})} >
        <View style={ styles.container } >
          <Text style={ styles.itemText } >{ this.props.item }</Text>
          {
            this.state.clicked ?
            <Image
              style={styles.clickedGreenCheck}
              source={imageSource}
            />
            :
            <View style={styles.greenCheck} ></View>
          }
        </View>
      </TouchableHighlight>
    )
  }

}

ListItem.propTypes = {
  item: PropTypes.string
}

export default ListItem;