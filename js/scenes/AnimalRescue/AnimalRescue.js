import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles'

const flowImage = require('../../assets/images/animal_flow.png')

const AnimalRescue = () => {
  return (
    <Image source={flowImage} style={styles.animalFlow} />
  )
}

export default AnimalRescue;
