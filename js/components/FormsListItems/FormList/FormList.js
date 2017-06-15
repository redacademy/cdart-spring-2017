import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import FormListItem from './../FormListItem';

const IntakeFormList = ({ formData }) => {
  return (
    <View>
      {formData.map((formSingleSectionData, i) => {
        return <FormListItem
          key={i}
          title={formSingleSectionData.title}
          descriptions={formSingleSectionData.descriptions}
        />
      })}
    </View>
  );
};

export default IntakeFormList;

IntakeFormList.propTypes = {
  formData: PropTypes.array,
}
