import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PDFViewer from '../../components/PDFViewer';
import { goToSubpage } from '../../lib/navigationHelpers';

import { styles } from './styles';

import {
View,
Text,
Image,
TouchableWithoutFeedback,
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
        <TouchableWithoutFeedback
          title="i"
          onPress={() => goToSubpage('intakeFormInstruction', 'home')}
        >
          <Image
            source={require('../../assets/icons/info_Icon@2x.png') }
            style={styles.infoIcon}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default FormContainer;
