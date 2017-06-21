import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { styles } from './styles';
import { height, width } from 'Dimensions';

import { View, WebView, Text } from 'react-native';

// Note that pdf images must be added to your xcode project and included
// in build folder to be displayed. Just adding them to the project's assets folder
// won't work!

class PDFViewer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      imagePath: ''
    }
  }

  componentDidMount() {
    switch(this.props.title) {
      case 'Animal Intake Form': {
        let imagePath = require('../../assets/images/animalIntake.pdf');

        this.setState({
          imagePath: imagePath
        });
      }
    }
  }

  render() {

    return (
    <View
     style={styles.pdfViewer}
    >
      <WebView
        source={ this.state.imagePath }
        style={styles.pdfViewer}
      />
      <View
        style={ styles.instructionsBox }
      >
        <Text
          style={ styles.instructionsText }
        >
          Pinch to zoom...
        </Text>
      </View>
    </View>
  );
  }

}

PDFViewer.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string
}

export default PDFViewer;
