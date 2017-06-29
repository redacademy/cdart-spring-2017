import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addGender } from '../../../redux/modules/petInfo'
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
      this.props.dispatch(addGender('female'))
    } else {
      this.setState({ male: true, female: false })
      this.props.dispatch(addGender('male'))
    }
  }

  componentDidMount(){
    if(this.props.data === 'male'){
      this.setState({ male: true })
    } else if(this.props.data === 'female'){
      this.setState({ female: true })
    }
  }

  render(){
    console.log(this.props.data)
    return (
      <View style={styles.container}>

        <TouchableHighlight style={this.state.female ? [styles.clicked, styles.clickedSeparator] : [styles.button, styles.buttonSeparator]} onPress={() => this.press('female')} >
          <Text style={this.state.female ? styles.clickedText : styles.buttonText}>Female</Text>
        </TouchableHighlight>

        <TouchableHighlight style={this.state.male ? styles.clicked : styles.button} onPress={() => this.press('male')} >
          <Text style={this.state.male ? styles.clickedText : styles.buttonText}>Male</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

SwitchButton.propTypes = {
  data: PropTypes.string
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(SwitchButton);