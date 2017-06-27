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

class MicrochipNumDisplay extends Component {

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

          this.props.info !== `""` &&
            <View>
              <Text style={ styles.leftText }>Chip #:</Text>
              <View style={ styles.blueTextArea }>
                <Text style={ styles.blueTextAreaText }>{ this.props.info }</Text>
              </View>
            </View>
          }
      </View>
    );
  }
}

MicrochipNumDisplay.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string
}

export default MicrochipNumDisplay;
