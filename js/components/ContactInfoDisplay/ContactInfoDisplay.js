import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../config/styles';
import { styles } from './styles';

class ContactInfoDisplay extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  componentDidMount() {
    console.log(this.props.info);
  }
  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    return (
      <View style={ styles.container }>
        <TouchableHighlight
          onPress={this.onPress}
          underlayColor={ colors.lightGrey }
        >
          <View style={ styles.headingContainer }>
            <Text style={styles.heading}>{ this.props.title }</Text>

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
            {
              this.props.info.name !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Name</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.name }</Text>
                  </View>
                </View>
            }

            {
              this.props.title === 'Veterinarian Contact' &&
                this.props.info.hospital !== `""` &&
                  <View>
                    <Text style={ styles.leftText }>Hospital</Text>
                    <View style={ styles.blueTextArea }>
                      <Text style={ styles.blueTextAreaText }>{ this.props.info.hospital }</Text>
                    </View>
                  </View>
            }

            {
              this.props.info.phone !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Phone</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.phone }</Text>
                  </View>
                </View>
            }

            {
              this.props.info.email !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Email</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.email }</Text>
                  </View>
                </View>
            }

            {
              this.props.info.street !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Street</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.street }</Text>
                  </View>
                </View>
            }

            {
              this.props.info.city !== `""` &&
                <View>
                  <Text style={ styles.leftText }>City</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.city }</Text>
                  </View>
                </View>
            }

            {
              this.props.info.province !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Province</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.province }</Text>
                  </View>
                </View>
            }

            {
              this.props.info.postal !== `""` &&
                <View>
                  <Text style={ styles.leftText }>Postal Code</Text>
                  <View style={ styles.blueTextArea }>
                    <Text style={ styles.blueTextAreaText }>{ this.props.info.postal }</Text>
                  </View>
                </View>
            }

          </View>
        }
      </View>
    );
  }
}

ContactInfoDisplay.propTypes ={
  title: PropTypes.string,
  info: PropTypes.object
}
export default ContactInfoDisplay;
