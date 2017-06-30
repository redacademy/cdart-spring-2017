import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PDFViewer from '../../components/PDFViewer';
import ShareButton from '../../components/ShareButton';
import FormInfoButton from '../../components/FormInfoButton';

import { styles } from './styles';

import {
  View,
  Text,
  Platform
  } from 'react-native';

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
        return <ShareButton data={ data }/>
      }
    }
  }

  render() {
    return (
      <View>
        {
          Platform.OS === 'android'
            ?
              <View>
                <Text style={ styles.disclaimerText }>
                  Sorry...viewing and printing forms is not supported on Android devices...
                </Text>
              </View>
            :
              <PDFViewer
                title={ this.props.data.title }
                imageName={ this.props.data.imageName }
                style={styles.pdf}
              />
        }
        {
          Platform.OS === 'Animal Intake Form' &&
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
