import React from 'react';
import { PropTypes } from 'prop-types';

import PDFView from 'react-native-pdf-view';

// Note that pdf images must be added to your xcode project and included
// in build folder to be displayed. Just adding them to the project's assets folder
// won't work!

const PDFViewer = ({ imageURI }) => {
  return (
    <PDFView
      path={ imageURI }
    />
  );
}

PDFViewer.propTypes = {
  imageURI: PropTypes.string
}

export default PDFViewer;
