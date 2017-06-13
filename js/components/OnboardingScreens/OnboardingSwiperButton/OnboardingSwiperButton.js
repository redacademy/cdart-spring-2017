/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

class OnboardingSwiperButton extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
          {this.props.text === 'Continue'
          ?
          <View style={styles.buttonarrow}>
            <Icon
              name={
                Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
              }
              size={32}
              color={'white'}
            />
          </View>
          :
          <View style={styles.button}>
            <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

export default OnboardingSwiperButton;
