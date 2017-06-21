import React, { Component } from 'react';
import { Image } from 'react-native';

import { styles } from './styles'

const flowImage = require('../../assets/images/animal_flow.png')

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
      <Image source={flowImage} style={styles.animalFlow} />
    )
  }
}

export default AnimalRescue;
