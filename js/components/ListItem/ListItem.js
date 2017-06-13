import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import { Text, View } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.itemText} >{item}</Text>
    </View>
  )
}

ListItem.propTypes = {
  item: PropTypes.string
}

export default ListItem;