import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import { styles } from './styles';

const SingleFormListItem = ({ title, descriptions }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      {descriptions.map((description, i) => {
        return <Text key={i} style={styles.listItemBullet}>{`\u2022   ${description}`}</Text>
      })}
    </View>
  );
};
export default SingleFormListItem;

SingleFormListItem.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array
};
