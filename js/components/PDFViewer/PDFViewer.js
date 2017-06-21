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
  }

  render() {

    return (
    <View
     style={styles.pdfViewer}
    >
      <WebView
        source={this.props.imagePath}
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
  imagePath: PropTypes.number
}

export default PDFViewer;
