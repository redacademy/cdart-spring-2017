import React from 'react';

import {
  Text,
  Image,
<<<<<<< HEAD
   } from 'react-native';
=======
  View,
} from 'react-native';
>>>>>>> Create Get Involved List View.

import GetInvolvedList from '../../components/GetInvolvedList';

const GetInvolved = ({list}) => {
  return (
    <View>
      <GetInvolvedList list={list}/>
    </View>
  );
}

export default GetInvolved;
