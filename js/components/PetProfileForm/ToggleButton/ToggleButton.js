import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

import { styles } from './styles';

class ToggleButton extends Component {

  constructor() {
    super();
    this.state = {
      selected: false,
    }
  }

  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({selected: !this.state.selected});
  };

  render() {
    return (
        <TouchableHighlight
          onPress={this.onPress}
          style={this.state.selected ? styles.selectedButton : styles.button}
        >
          <Text style={this.state.selected ? styles.selectedButtonText : styles.buttonText}>Friendly</Text>
        </TouchableHighlight>
    );
  }
}

export default ToggleButton;