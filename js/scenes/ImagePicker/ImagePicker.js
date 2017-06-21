import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImagePickerIOS,
} from 'react-native';

import { styles } from './styles';

class ImagePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.log(error));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.image?
          <Image style={{ flex: 1, alignSelf: 'center', width: 210, height: 140, marginTop: 5, marginBottom: 15, borderRadius: 15 }} source={{ uri: this.state.image }} /> :
          null
        }
      </View>
    );
  }
}

export default ImagePicker;