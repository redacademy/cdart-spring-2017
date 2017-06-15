import React from 'react';
import { ScrollView } from 'react-native';

import IntakeFormList from './../IntakeFormList';
import { intakeInstructions } from './../../assets/data';

const IntakeForm = () => {
  return (
    <ScrollView>
      <IntakeFormList formData={intakeInstructions} />
    </ScrollView>
  );
};

export default IntakeForm;

