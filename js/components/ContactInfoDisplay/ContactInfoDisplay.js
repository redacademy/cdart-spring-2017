import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../config/styles';
import { styles } from './styles';

const ownerContact = {
  name: 'Owner',
  properties: {
    name: 'string',
    phone: '6045555555',
    email: 'owner@owner.com',
    street: 'West Street',
    city: 'Cityville',
    province: 'AB',
    postal: 'A8N3K4',
  }
}

class ContactInfoDisplay extends Component {

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
      <View style={ styles.container }>
        <TouchableHighlight
          onPress={this.onPress}>
          <View style={ styles.headingContainer }>
            <Text style={styles.heading}>Owner Info</Text>
            <Icon
              name={'ios-add-circle-outline'}
              size={20}
              color={colors.skyBlue}
              style={ styles.icon }
            />
          </View>
        </TouchableHighlight>

        { this.state.expanded &&
          <View>
            <View>
              <Text>Name</Text>
              <Text>{ ownerContact.name }</Text>
            </View>

            <View>
              <Text>Phone Number</Text>
              <Text>{ ownerContact.properties.phone }</Text>
            </View>

            <View>
              <Text>Email Address</Text>
              <Text>{ ownerContact.properties.email }</Text>
            </View>

            <View>
              <Text>Address</Text>
              <Text>{ ownerContact.properties.street }</Text>
              <Text>{ ownerContact.properties.city }</Text>
              <Text>{ ownerContact.properties.province }</Text>
              <Text>{ ownerContact.properties.postal }</Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

export default ContactInfoDisplay;
