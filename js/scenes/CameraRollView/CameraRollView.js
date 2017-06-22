import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
  NativeModules
} from 'react-native';
import { styles } from './styles';

class CameraRollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: '',
      fetchParams: { first: 25 },
      groupTypes: 'SavedPhotos',
    };
  }

  componentDidMount() {
    // get photos from camera roll
    CameraRoll.getPhotos({ first: 100 }).done(
      (data) => {
        const images = data.edges.map(asset => asset.node.image);
        this.setState({
          images,
        });
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  _selectImage(uri) {
    // define whatever you want to happen when an image is selected here
    console.log('this.state: ', this.state, 'NativeModules: ', NativeModules)
    this.setState({
      selectedImage: uri,
    });
  }

  render() {
    console.log('state onPress', this.state, 'selectedImage', this.state.selectedImage)
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.images.map(image => (
              <TouchableHighlight style={styles.container} key={image.uri} onPress={() => this._selectImage(image.uri)}>
                <Image style={styles.image} source={{ uri: image.uri }} />
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CameraRollView;