import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import ContactForm from '../ContactForm';

import { colors } from '../../../config/styles';
import { styles } from './styles';

class ContactInfoItem extends Component {

  constructor(props) {
    super(props);
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
          onPress={this.onPress}
          underlayColor={ colors.lightGrey }
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}>{this.props.title}</Text>
            <Icon
              name={'ios-add-circle-outline'}
              size={20}
              color={colors.skyBlue}
            />
          </View>
        </TouchableHighlight>

        { this.state.expanded &&
          <ContactForm {...this.props} />
        }
      </View>
    );
  }
}

ContactInfoItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default ContactInfoItem;
