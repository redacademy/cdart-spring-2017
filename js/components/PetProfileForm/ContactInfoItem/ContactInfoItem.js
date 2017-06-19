import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ContactForm from '../ContactForm';

import { colors } from '../../../config/styles';
import { styles } from './styles';

class ContactInfoItem extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onPress}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}>Owner Information</Text>
            <Icon
              name={'ios-add-circle-outline'}
              size={20}
              color={colors.skyBlue}
            />
          </View>
        </TouchableHighlight>

        { this.state.expanded &&
          <ContactForm />
        }
      </View>
    );
  }
}

export default ContactInfoItem;