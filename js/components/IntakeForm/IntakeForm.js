import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import PropTypes from 'prop-types';
import IntakeFormList from './../IntakeFormList';
import LinearGradient from 'react-native-linear-gradient';
import {intakeInstructions} from './../../assets/data';

const IntakeForm = () => {
  return (
    <View>
      <IntakeFormList list={intakeInstructions} />
    </View>
  )
}

export default IntakeForm;

IntakeForm.propTypes = {
  list: PropTypes.array
}
