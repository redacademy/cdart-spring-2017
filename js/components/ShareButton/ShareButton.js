import React from 'react';
import PropTypes from 'prop-types';

import ActivityView from 'react-native-activity-view';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const startAirDrop = ( imageData ) => {
  ActivityView.show({
    text: `Check out CDART's ${ imageData.title }`,
    url: 'http://www.cdart.org',
    image: imageData.imageName
  });
}

const ShareButton = ({ data }) => (
  <Icon
    name={ 'md-more' }
    size={ 35 }
    color={ 'white' }
    style={ styles.shareIcon }
    onPress={ ( ) => startAirDrop( data ) }
  />
);

ShareButton.propTypes = {
  data: PropTypes.object.isRequired
}

export default ShareButton;
