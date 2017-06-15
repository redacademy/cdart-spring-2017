import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import PropTypes from 'prop-types';


const IntakeFormListItem = ({ title, }) => {
  return (
    <View>
      <Text>{title}</Text>

    </View>
  )
};
export default IntakeFormListItem;

IntakeFormListItem.propTypes = {
  title: PropTypes.string,
};
