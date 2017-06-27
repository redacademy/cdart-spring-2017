import React from 'react';
import { Text, ListView, View } from 'react-native';
import PropTypes from 'prop-types'
import { styles } from './styles';


const NumberList = ({ dataSource }) => {
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
      style={{ backgroundColor:'#DEE8F0' }}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  )
}
NumberList.proptypes = {
  dataSource: PropTypes.object
}
export default NumberList;
