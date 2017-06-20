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
    console.log(this.props)
    return (
      this.state.selected ?
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.selectedButton}
          onChange={val => this.props.onChange(val)}
          value={this.props.value}
        >
          <Text style={styles.selectedButtonText}>Friendly</Text>
        </TouchableHighlight>
      :
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
          onChange={val => this.props.onChange(val)}
        >
          <Text style={styles.buttonText}>Friendly</Text>
        </TouchableHighlight>
    );
  }
}

export default ToggleButton;