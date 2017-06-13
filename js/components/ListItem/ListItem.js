import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <Text>{item}</Text>
  )
}

ListItem.propTypes = {
  item: PropTypes.string
}

export default ListItem;