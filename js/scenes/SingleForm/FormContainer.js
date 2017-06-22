import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ActivityView from 'react-native-activity-view';

import PDFViewer from '../../components/PDFViewer';
import ShareButton from '../../components/ShareButton';
import FormInfoButton from '../../components/FormInfoButton';

import { styles } from './styles';

import {
View,
Text,
Image,
TouchableWithoutFeedback,
} from 'react-native';

const startAirDrop = (imageData) => {
  ActivityView.show({
    text: `Check out CDART's ${ imageData.title }`,
    url: 'http://www.cdart.org',
    image: 'image!animalIntake'
  });
}

class FormContainer extends Component {

  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title( params ) {
        return params.data.title
      },
      renderRight( params ) {
        const data = params.params.data;
        return <ShareButton startAirDrop={ startAirDrop } data={ data }/>
      }
    }
  }

  render() {
    return (
      <View>
        <PDFViewer
          title={ this.props.data.title }
          imagePath={ this.props.data.filePath }
          style={styles.pdf}
        />
        {
          this.props.data.title === 'Animal Intake Form' &&
            <FormInfoButton />
        }
      </View>
    );
  }
}

FormContainer.propTypes = {
  data: PropTypes.object
}

export default FormContainer;
