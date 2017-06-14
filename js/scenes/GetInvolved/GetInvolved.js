import React from 'react';
import {
  View,
} from 'react-native';

import GetInvolvedList from '../../components/GetInvolvedScreens/GetInvolvedList';

const GetInvolved = ({list}) => {
  return (
    <View>
      <GetInvolvedList list={list} />
    </View>
  );
}

export default GetInvolved;
