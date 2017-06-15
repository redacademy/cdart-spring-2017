import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Incident = ({ rowData }) => {
  return (
    <TouchableHighlight onPress={console.log(rowData)} key={rowData} >
      <View style={styles.incident} >
        <Text>{rowData}</Text>
        <Image
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
          style={[styles.arrow]}
        />
      </View>
    </TouchableHighlight>
  )
}

Incident.propTypes = {
  rowData: PropTypes.string
}

export default Incident;