import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

import { styles } from './styles';

const EmergencyKit = ({ dataSource }) => {
  return (
    <View>
      <View style={styles.greyTop} >
        <Text style={styles.greyTopText} >Prepare your pet for an emergency by having these items ready to grab and go</Text>
      </View>
      <ListView
        dataSource={dataSource}
        renderRow={(item, i) => {
          return <ListItem item={item} key={item + i} />
        }}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    </View>
  )
}

EmergencyKit.propTypes = {
  kitCheckList: PropTypes.array
}

export default EmergencyKit;