import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import { Image, TouchableHighlight, Text, View } from 'react-native';

class ListItem extends Component {

  constructor (){
    super();
    this.state = {
      clicked: true
    }
  }

  render(){
    return (
      <View style={ styles.container } >
        <Text style={ styles.itemText } >{ this.props.item }</Text>
        <TouchableHighlight
          onPress={() => this.setState({clicked: !this.state.clicked})}
        >
          <Image
            style={ this.state.clicked ? styles.greenCheck : styles.clickedGreenCheck }
            source={require('../../../ios/cdart/Images.xcassets/AppIcon.appiconset/icon-20@3x.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }

}

ListItem.propTypes = {
  item: PropTypes.string
}

export default ListItem;