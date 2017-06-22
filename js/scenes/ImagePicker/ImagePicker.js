import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImagePickerIOS,
  TouchableHighlight
} from 'react-native';

import { colors } from '../../config/styles';
import { styles } from './styles';

class ImagePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.log(error));
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={colors.grey}
        onPress={() => this.pickImage()}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={
            this.state.image ? { uri: this.state.image }
            : require('../../assets/icons/paw_icon.png')}
        />
      </TouchableHighlight>
    );
  }
}

export default ImagePicker;