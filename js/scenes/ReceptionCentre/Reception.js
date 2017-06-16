import React from 'react';
import { Text, ListView, View } from 'react-native';

import { styles } from './styles';

const Reception = ({ dataSource }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(item, i) => (
        <View>
          <Text>{i}</Text>
          <Text>{item}</Text>
        </View>
      )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  )
}

export default Reception;