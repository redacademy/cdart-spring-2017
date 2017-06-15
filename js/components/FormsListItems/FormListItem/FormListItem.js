import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import PropTypes from 'prop-types';

const FormListItem = ({ title, descriptions }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      {descriptions.map((description, i) => {
        return <Text key={i}>{`\u2022   ${description}`}</Text>
      })}
    </View>
  );
};
export default FormListItem;

FormListItem.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array
};
