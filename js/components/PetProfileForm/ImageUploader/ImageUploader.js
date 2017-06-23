import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  TouchableHighlight
} from 'react-native';

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
      <Image
        style={styles.image}
        source={
          props.selectedImage ? { uri: props.selectedImage }
          : require('../../../assets/icons/paw_icon.png')}
      />
    </TouchableHighlight>
  );
}

export default ImageUploader;