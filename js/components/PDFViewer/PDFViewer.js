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
      imagePath: 'tings'
    }
  }

  componentWillMount() {
    switch(this.props.title) {
      case 'Animal Intake Form': {
        let imagePath = require('../../assets/images/animalIntake.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Action Request Form': {
        let imagePath = require('../../assets/images/actionRequest.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Daily Animal Care Log': {
        let imagePath = require('../../assets/images/animalCare.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Volunteer Sign-In Form': {
        let imagePath = require('../../assets/images/volunteerSignIn.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Foster Locations Form': {
        let imagePath = require('../../assets/images/fosterLocations.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Offer to Help Form': {
        let imagePath = require('../../assets/images/offerHelp.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Position Log Form': {
        let imagePath = require('../../assets/images/positionLog.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Publication Consent Form': {
        let imagePath = require('../../assets/images/publicationConsent.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Release of Responsibility Form': {
        let imagePath = require('../../assets/images/releaseResponsibility.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Foster Request Form': {
        let imagePath = require('../../assets/images/fosterRequest.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Situation Report Form': {
        let imagePath = require('../../assets/images/situationReport.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Supplies Borrowed by CDART': {
        let imagePath = require('../../assets/images/suppliesBorrowed.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Supplies Lent by CDART': {
        let imagePath = require('../../assets/images/suppliesLent.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Supplies Lent by Volunteers': {
        let imagePath = require('../../assets/images/volunteerSuppliesLent.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Volunteer Phone Contact List': {
        let imagePath = require('../../assets/images/volunteerPhone.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      case 'Volunteer Hauler Form': {
        let imagePath = require('../../assets/images/volunteerHauler.pdf');

        this.setState({
          imagePath: imagePath
        });

        break;
      }
      default: {
        return false;
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
