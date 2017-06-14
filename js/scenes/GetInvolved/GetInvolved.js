import React from 'react';

import {
  Text,
  Image,
  View,
} from 'react-native';

import GetInvolvedList from '../../components/GetInvolvedList';

const GetInvolved = ({list}) => {
  return (
    <View>
      <GetInvolvedList list={list}/>
    </View>
  );
}

export default GetInvolved;
