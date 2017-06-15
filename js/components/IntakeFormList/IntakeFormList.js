import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import IntakeFormListItem from './../IntakeFormListItem';

const IntakeFormList = ({ formData }) => {
  return (
    <View>
      {formData.map((formSingleSectionData, i) => {
        return <IntakeFormListItem
          key={i}
          title={formSingleSectionData.title}
          descriptions={formSingleSectionData.descriptions}
        />
      })};
    </View>
  );
};

export default IntakeFormList;

IntakeFormList.propTypes = {
  formData: PropTypes.array,
}
