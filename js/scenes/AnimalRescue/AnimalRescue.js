import React, { Component } from 'react';
import { WebView } from 'react-native';

import { styles } from './styles'

const flowImage = require('../../assets/images/animalFlow.png')

class AnimalRescue extends Component {

  static route = {
    navigationBar: {
      title(params) {
        return params.data.title
      }
    }
  }

  render() {
    return (
      <WebView source={flowImage} style={styles.animalFlow} />
    )
  }
}

export default AnimalRescue;
