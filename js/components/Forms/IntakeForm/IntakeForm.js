import React from 'react';
import { ScrollView } from 'react-native';

import FormList from './../../FormsListItems/FormList';
import { intakeInstructions } from './../../../assets/data';

const IntakeForm = () => {
  return (
    <ScrollView>
      <FormList formData={intakeInstructions} />
    </ScrollView>
  );
};

export default IntakeForm;

