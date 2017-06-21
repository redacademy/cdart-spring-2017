import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form';

import { addButtonInfo } from '../../../redux/modules/otherInputs'

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
    // if(this.state.selected){
    //   this.props.dispatch(addButtonInfo(this.props.temper))
    // }
    this.props.dispatch(addButtonInfo(this.props.temper))
    console.log(this.props.form)
  };

  render() {
    return (
      this.state.selected ?
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.selectedButton}
        >
          <Text style={styles.selectedButtonText}>{this.props.temper}</Text>
        </TouchableHighlight>
      :
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{this.props.temper}</Text>
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
