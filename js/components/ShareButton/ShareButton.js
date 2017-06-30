import React from 'react';
import PropTypes from 'prop-types';

import { Platform, TouchableOpacity } from 'react-native';

import ActivityView from 'react-native-activity-view';
import {RNPrint} from 'NativeModules';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../config/styles';

const startAirDrop = ( imageData ) => {
  ActivityView.show({
    text: `Check out CDART's ${ imageData.title }`,
    url: 'http://www.cdart.org',
    image: imageData.imageName
  });
}

const androidPrint = ( imageData ) => {
  RNPrint.print( imageData.imagePath ).then((jobName) => {
    console.log(`Printing ${jobName} complete!`);
  });
}

const ShareButton = ({ data }) => (
  <TouchableOpacity
    style={ styles.shareButton }
    underlayColor={ colors.lightRed }
    onPress={ Platform.OS === 'android'
              ? () => androidPrint( data )
              : ( ) => startAirDrop( data )
            }
  >
    <Icon
      name={ 'md-more' }
      size={ 35 }
      color={ 'white' }
      style={ styles.shareIcon }
    />
  </TouchableOpacity>
);

ShareButton.propTypes = {
  data: PropTypes.object.isRequired
}

export default ShareButton;
