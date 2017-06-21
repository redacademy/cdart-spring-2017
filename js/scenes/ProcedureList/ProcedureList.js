import React from 'react';
import { Text, ListView, View } from 'react-native';

import { styles } from './styles';


const Reception = ({ dataSource }) => {
  let count = 0;
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(item) => {
        count++
        return (
          <View style={styles.receptionContainer} >
            <Text style={styles.receptionNum} >{count}</Text>
            <Text style={styles.receptionText} >{item}</Text>
          </View>
        )
      }}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  )
}

export default Reception;