import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PDFViewer from '../../components/PDFViewer';

import { styles } from './styles';

import {
View,
Text,
} from 'react-native';

const pathToImage = '/../ios/samplePDF.pdf';

class FormContainer extends Component {

  render() {
    console.log('imageURI ISSSSS', pathToImage)
    return (
      <View>
        <PDFViewer
          imageURI={ pathToImage }
          style={styles.pdf}
        />
      </View>
    );
  }
}

export default FormContainer;
