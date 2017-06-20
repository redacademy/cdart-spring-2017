import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { styles } from './styles';

import { View } from 'react-native';

import PDFView from 'react-native-pdf-view';

// Note that pdf images must be added to your xcode project and included
// in build folder to be displayed. Just adding them to the project's assets folder
// won't work!

class PDFViewer extends Component {
  constructor( props ) {
    super( props );
  }

  render() {

    return (
    <View style={{backgroundColor: 'aquamarine', height: 420, width: 350 }}>
      <PDFView
        ref={(pdf)=>{this.pdfView = pdf;}}
        path={'cdart/ios/cdart/Images.xcassets/samplePDF.pdf'}
        onLoadComplete = {(pageCount)=>{
          this.pdfView.setNativeProps({
              zoom: 1.5
          });
        }}
        style={ styles.pdfViewer }
      />
    </View>
  );
  }

}

PDFViewer.propTypes = {
  imageURI: PropTypes.string
}

export default PDFViewer;
