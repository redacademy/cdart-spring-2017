import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const ShareButton = ({ startAirDrop, data }) => (
  <Icon
    name={ 'md-more' }
    size={ 35 }
    color={ 'white' }
    style={ styles.shareIcon }
    onPress={ ( ) => startAirDrop( data ) }
  />
);

ShareButton.propTypes = {
  startAirDrop: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default ShareButton;
