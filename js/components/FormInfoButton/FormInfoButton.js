import React from 'react';
import PropTypes from 'prop-types';

import { goToSubpage } from '../../lib/navigationHelpers';

import { styles } from './styles';

import {
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const FormInfoButton = () => (
  <TouchableWithoutFeedback
    title="i"
    onPress={() => goToSubpage('intakeFormInstruction', 'home')}
  >
    <Image
      source={require('../../assets/icons/info_Icon@2x.png') }
      style={styles.infoIcon}
    />
  </TouchableWithoutFeedback>
);



export default FormInfoButton;
