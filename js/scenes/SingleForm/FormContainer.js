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

class FormContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.data.filePath);
  }

  render() {
    return (
      <View>
        <PDFViewer
          title={ this.props.data.title }
          imagePath={ this.props.data.filePath }
          style={styles.pdf}
        />
        <TouchableWithoutFeedback
          title="i"
          onPress={() => goToSubpage('intakeFormInstruction', 'home')}
          style={ styles.iconContainer }
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

FormContainer.propTypes = {
  data: PropTypes.object
}

export default FormContainer;
