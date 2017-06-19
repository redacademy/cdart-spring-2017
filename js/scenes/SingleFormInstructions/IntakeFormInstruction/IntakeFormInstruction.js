import React from 'react';

import { ScrollView } from 'react-native';
import SingleFormList from './../../../components/SingleFormsListItems/SingleFormList';
import { intakeInstructions } from './../../../assets/data';

const IntakeForm = () => {
  return (
    <ScrollView>
      <SingleFormList formData={intakeInstructions} />
    </ScrollView>
  );
};

export default IntakeForm;

