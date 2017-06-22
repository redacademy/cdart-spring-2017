import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight
} from 'react-native';

<<<<<<< HEAD
<<<<<<< HEAD
import {goToCameraRollView} from '../../../lib/navigationHelpers';
=======
>>>>>>> Add ImageUploader component.
=======
import {goToCameraRollView} from '../../../lib/navigationHelpers';
>>>>>>> Add routing to CameraRollView for pet profile form.
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
<<<<<<< HEAD
<<<<<<< HEAD
        onPress={() => goToCameraRollView()}
=======
>>>>>>> Add ImageUploader component.
=======
        onPress={() => goToCameraRollView()}
>>>>>>> Add routing to CameraRollView for pet profile form.
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