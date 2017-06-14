import React from 'react';

import { Text } from 'react-native';

import PictureStory from '../../components/PictureStory';
import { cdartMission } from '../../assets/data';


const Updates = () => {
  return (
    // <Text>************ UPDATES ***********</Text>
    <PictureStory content={cdartMission}/>
  );
}

export default Updates;
