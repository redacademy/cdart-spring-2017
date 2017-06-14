import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

import { styles } from './styles';

const VolunteerPacking = ({ dataSource }) => {
  return (
    <View>
      <View style={styles.greyTop} >
        <Text style={styles.greyTopText} >
          As a volunteer, being prepared is crucial to any situation.
          Be sure to keep a personal bag handy in case of an emergency.
        </Text>
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

VolunteerPacking.propTypes = {
  dataSource: PropTypes.object
}

export default VolunteerPacking;