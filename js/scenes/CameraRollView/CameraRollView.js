import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CameraRoll,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  Dimensions,
  NativeModules
} from 'react-native';

import { setPetProfileImageUri } from '../../redux/modules/petInfo';
import { exitCameraRollView } from '../../lib/navigationHelpers';
import { styles } from './styles';

const { width } = Dimensions.get('window')

class CameraRollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  static route = {
    navigationBar: {
      title: 'Camera Roll',
    }
  }

  componentDidMount() {
    // get photos from camera roll
    CameraRoll.getPhotos({ first: 100}).done(
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
    this.props.dispatch(setPetProfileImageUri(uri))
    exitCameraRollView('petProfile');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.images.map(image => (
            <TouchableHighlight style={styles.container} key={image.uri} onPress={() => this._selectImage(image.uri)}>
              <Image style={{ width: width/3, height: width/3}} source={{ uri: image.uri }} />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default connect()(CameraRollView);