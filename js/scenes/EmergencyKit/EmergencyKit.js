import React from 'react';
import { Text } from 'react-native';

import { ListItem } from '../../components/ListItem';

const EmergencyKit = (kitCheckList) => {
  return (
    kitCheckList.map((item, i) => {
      return <ListItem item={item} key={item + i} />
    })
  )
}

export default EmergencyKit;