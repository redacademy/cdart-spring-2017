import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';
import Expand from 'react-native-simple-expand';
import { styles } from './styles';

class Incident extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
      arrow: '90deg'
    }
  }

  toggleIncident(){
    LayoutAnimation.easeInEaseOut();
    this.setState({
      open: !this.state.open,
      arrow: (this.state.arrow === '90deg' ? '270deg' : '90deg')
    })
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleIncident()} key={this.props.rowData.title} >
          <View style={styles.incident} >
            <Text style={{color: this.props.rowData.color}} >{this.props.rowData.title}</Text>
            <Image
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
              style={[styles.arrow, { transform: [{ rotate: this.state.arrow }] }]}
            />
          </View>
        </TouchableOpacity>
        <Expand value={this.state.open}>
          <Text style={ styles.incidentText }>{this.props.rowData.text}</Text>
        </Expand>
      </View>
    )
  }
}

Incident.propTypes = {
  rowData: PropTypes.object
}

export default Incident;
