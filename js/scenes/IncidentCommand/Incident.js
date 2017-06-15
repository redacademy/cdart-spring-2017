import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';

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
        <TouchableHighlight onPress={() => this.toggleIncident()} key={this.props.rowData.title} >
          <View style={styles.incident} >
            <Text style={{color: this.props.rowData.color}} >{this.props.rowData.title}</Text>
            <Image
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
              style={[styles.arrow, { transform: [{ rotate: this.state.arrow }] }]}
            />
          </View>
        </TouchableHighlight>
        {
          this.state.open && <Text style={styles.incidentText} >{this.props.rowData.text}</Text>
        }
      </View>
    )
  }
}

Incident.propTypes = {
  rowData: PropTypes.object
}

export default Incident;