import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import SingleFormListItem from './../SingleFormListItem';

const SingleFormList = ({ formData }) => {
  return (
    <View>
      {formData.map((formSingleSectionData, i) => {
        return <SingleFormListItem
          key={i}
          title={formSingleSectionData.title}
          descriptions={formSingleSectionData.descriptions}
        />
      })}
    </View>
  );
};

export default SingleFormList;

SingleFormList.propTypes = {
  formData: PropTypes.array,
}
