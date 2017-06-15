import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import PropTypes from 'prop-types';

const IntakeFormListItem = ({ title, descriptions }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      {descriptions.map((description, i) => {
        return <Text key={i}>{`\u2022   ${description}`}</Text>
      })}
    </View>
  );
};
export default IntakeFormListItem;

IntakeFormListItem.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array
};
