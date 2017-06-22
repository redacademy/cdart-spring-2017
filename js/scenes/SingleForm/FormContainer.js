import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PDFViewer from '../../components/PDFViewer';
import { goToSubpage } from '../../lib/navigationHelpers';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

import {
View,
Text,
Image,
TouchableWithoutFeedback,
} from 'react-native';

const printPdf = () => {
  console.log('print pdf button pressed');
}

class FormContainer extends Component {

  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title(params) {
        return params.data.title
      },
      renderRight: () => <Icon
                            name={ 'md-more' }
                            size={ 35 }
                            color={ 'white' }
                            style={ styles.printButton }
                            onPress={ () => printPdf() }
                          />
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
        }
      </View>
    );
  }
}

FormContainer.propTypes = {
  data: PropTypes.object
}

export default FormContainer;
