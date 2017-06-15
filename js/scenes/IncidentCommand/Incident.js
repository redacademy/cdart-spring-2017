import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

class Incident extends Component {

  constructor(){
    super();
    this.state = {
      open: false
    }
  }

  toggleIncident(){
    this.setState({ open: !this.state.open })
  }

  render(){
    return (
      <TouchableHighlight onPress={() => this.toggleIncident()} key={this.props.rowData.title} >
        <View>
          <View style={styles.incident} >
            <Text>{this.props.rowData.title}</Text>
            <Image
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
              style={[styles.arrow]}
            />
          </View>
          {
            this.state.open && <Text style={styles.incidentText} >{this.props.rowData.text}</Text>
          }
        </View>
      </TouchableHighlight>
    )
  }
}

Incident.propTypes = {
  rowData: PropTypes.object
}

export default Incident;