import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';

import { addTemperament, addSpayed, removeSpayed, removeTemperament } from '../../../redux/modules/petInfo'

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

    if(!this.state.selected){
      if(this.props.info === 'Spayed'){
        this.props.dispatch(removeSpayed())
      } else {
        this.props.dispatch(removeTemperament(this.props.info))
      }
    } else {
      if(this.props.info === 'Spayed'){
        this.props.dispatch(addSpayed(this.props.info))
      } else {
        this.props.dispatch(addTemperament(this.props.info))
      }
    }
  };

  componentDidMount(){
    if(this.props.selected === 'Spayed')  this.setState({ selected: true });
    let tempers = []
    if(this.props.toggled){
      this.props.toggled.map(t => {
        tempers.push(t.temperament)
      })
      if(tempers.includes(this.props.info)){
        this.setState({ selected: true })
        this.props.dispatch(addTemperament(this.props.info))
      }
    }
  }

  render() {
    return (
      this.state.selected ?
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.selectedButton}
        >
          <Text style={styles.selectedButtonText}>{this.props.title}</Text>
        </TouchableHighlight>
      :
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{this.props.title}</Text>
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

ToggleButton.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  toggled: PropTypes.array,
  dispatch: PropTypes.func,
  selected: PropTypes.bool
}

export default connect(mapStateToProps)(ToggleButton);
