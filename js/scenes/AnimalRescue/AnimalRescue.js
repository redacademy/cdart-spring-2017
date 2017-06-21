import React, { Component } from 'react';
<<<<<<< HEAD
import { WebView } from 'react-native';
=======
import { Image } from 'react-native';
>>>>>>> Add titles to procedure list and subpages. Rename ReceptionCenter component to ProcedureList.

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
