import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

import { styles } from './styles';

const EmergencyKit = ({ dataSource }) => {
  return (
    <ScrollView>
      <View style={styles.greyTop} >
        <Text style={styles.greyTopText} >
          Prepare your pet for an emergency by having these items ready to grab and go.
        </Text>
      </View>
      <ListView
        dataSource={dataSource}
        renderRow={(item, i) => {
          return <ListItem item={item} key={item + i} />
        }}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    </ScrollView>
  )
}

EmergencyKit.propTypes = {
  dataSource: PropTypes.object
}

export default EmergencyKit;
