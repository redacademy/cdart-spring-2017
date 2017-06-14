import React from 'react';

import { Text } from 'react-native';
import PictureStory from '../../components/PictureStory';

import {cdartMission, takeACourse} from '../../assets/data';

const Updates = () => {
  return (
    // <Text>************ UPDATES ***********</Text>
    <PictureStory content={cdartMission} />
  );
}

export default Updates;
