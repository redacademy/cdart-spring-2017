import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight
} from 'react-native';

import {goToCameraRollView} from '../../../lib/navigationHelpers';
import { colors } from '../../../config/styles';
import { styles } from './styles';

class ImageUploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  render() {
    console.log(this.props, this.state);
    return (
      <TouchableHighlight
        underlayColor={colors.grey}
        onPress={() => goToCameraRollView()}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={
            this.state.image ? { uri: this.state.image }
            : require('../../../assets/icons/paw_icon.png')}
        />
      </TouchableHighlight>
    );
  }
}

export default ImageUploader;