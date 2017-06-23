import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { addTemperament, addSpayed } from '../../../redux/modules/petInfo'

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
    if(this.props.info === 'Spayed'){
      this.props.dispatch(addSpayed(this.props.info))
    } else {
      this.props.dispatch(addTemperament(this.props.info))
    }
  };

  render() {
    return (
      this.state.selected ?
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.selectedButton}
        >
          <Text style={styles.selectedButtonText}>{this.props.info}</Text>
        </TouchableHighlight>
      :
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{this.props.info}</Text>
        </TouchableHighlight>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.petProfile,
    form: getFormValues('NewProfileForm')(state)
  }
}

export default connect(mapStateToProps)(ToggleButton);
