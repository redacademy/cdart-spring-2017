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
    this.props.dispatch(addButtonInfo(this.props.info))
    console.log(this.props.form)
    console.log(this.props.data)
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
          <Text style={styles.selectedButtonText}>{this.props.info}</Text>
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

function mapStateToProps(state){
  return {
    data: state.petProfile,
    form: getFormValues('NewProfileForm')(state)
  }
}

export default connect(mapStateToProps)(ToggleButton);
