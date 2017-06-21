import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import { addGenderInfo } from '../../../redux/modules/otherInputs'
import { styles } from './styles';

class SwitchButton extends Component{

  constructor(){
    super();
    this.state = {
      male: false,
      female: false
    }
  }

  press(gender){
    if(gender === 'female'){
      this.setState({ female: true, male: false })
      this.props.dispatch(addGenderInfo('female'))
    } else {
      this.setState({ male: true, female: false })
      this.props.dispatch(addGenderInfo('male'))
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <TouchableHighlight style={this.state.female ? styles.clicked : styles.button} onPress={() => this.press('female')} >
          <Text style={this.state.female ? styles.clickedText : styles.buttonText}>Female</Text>
        </TouchableHighlight>

        <TouchableHighlight style={this.state.male ? styles.clicked : styles.button} onPress={() => this.press('male')} >
          <Text style={this.state.male ? styles.clickedText : styles.buttonText}>Male</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(SwitchButton);