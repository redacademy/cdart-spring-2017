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
      this.state.selected ?
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.selectedButton}
        >
          <Text style={styles.selectedButtonText}>Friendly</Text>
        </TouchableHighlight>
      :
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Friendly</Text>
        </TouchableHighlight>
    );
  }
}

export default ToggleButton;