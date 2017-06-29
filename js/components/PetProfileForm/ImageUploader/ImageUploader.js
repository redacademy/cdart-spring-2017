import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

import {goToSubpage} from '../../../lib/navigationHelpers';
import { colors } from '../../../config/styles';
import { styles } from './styles';

const ImageUploader = (props) => {
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      onPress={() => goToSubpage('cameraRollView', 'petProfile')}
      style={styles.container}
    >
    {props.selectedImage ?
      <Image
        style={styles.image}
        source={{ uri: props.selectedImage }}
      />
    :
      <Image
        style={styles.icon}
        source={require('../../../assets/icons/pet_profile_add_photo.png')}
      />
    }
    </TouchableHighlight>
  );
}

ImageUploader.propTypes = {
  selectedImage: PropTypes.string
}

export default ImageUploader;